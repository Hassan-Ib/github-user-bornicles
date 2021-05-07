import React, { useState, useEffect, useContext } from "react";
// import mockUser from "./mockData.js/mockUser";
// import mockRepos from "./mockData.js/mockRepos";
// import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [followers, setFollowers] = useState(null);
  const [requestRate, setRequestRate] = useState(0);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });

  const searchGithubUser = async (user) => {
    try {
      toggleError();
      setIsloading(true);
      const response = await axios(`${rootUrl}/users/${user}`);
      if (response) {
        setGithubUser(response.data);
        const { login, followers_url } = response.data;
        // const reposRes = await axios(
        //   `${rootUrl}/users/${login}/repos?per_page=100`
        // );
        // const followersRes = await axios(`${followers_url}?per_page=100`);
        // setRepos(reposRes.data);
        // setFollowers(followersRes.data);
        const results = await Promise.allSettled([
          axios(`${rootUrl}/users/${login}/repos?per_page=100`),
          axios(`${followers_url}?per_page=100`),
        ]);
        const [reposRes, followersRes] = results;
        const status = "fulfilled";
        if (reposRes.status === status) {
          setRepos(reposRes.value.data);
        }
        if (followersRes.status === status) {
          setFollowers(followersRes.value.data);
        }
      }
      setIsloading(false);
    } catch (error) {
      toggleError(true, "there is no user with that UserName!.");
      setIsloading(false);
      //console.log(error);
    }
  };
  //check rate
  const checkRequestRate = async () => {
    try {
      const res = await axios(`${rootUrl}/rate_limit`);
      let {
        data: {
          rate: { remaining },
        },
      } = res;
      setRequestRate(remaining);
      if (remaining === 0) {
        toggleError(true, "sorry, you have exceeded your hourly rate limit!.");
      }
      // console.log("checkRequestRate : is  async", remaining);
    } catch (err) {
      console.log(err);
    }
  };

  function toggleError(show = false, msg = "") {
    setError({ show, msg });
  }

  useEffect(() => {
    checkRequestRate();
  });

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requestRate,
        error,
        searchGithubUser,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

const useGithubContext = () => {
  const value = useContext(GithubContext);
  return value;
};

export { GithubProvider, useGithubContext };
