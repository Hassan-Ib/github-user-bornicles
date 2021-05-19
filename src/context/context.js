import React, { useState, useEffect, useContext } from "react";
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

  const getGithubUser = async (user) => {
    try {
      toggleError();
      setIsloading(true);
      const response = await Promise.all(axios(`${rootUrl}/users/${user}`));

      if (response) {
        setGithubUser(response.data);
        const { login, followers_url } = response.data;
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
      console.log("search error : ", error);
      toggleError(true, "there is no user with that UserName!.");

      setIsloading(false);
    }
  };

  //check rate

  const checkRequestRate = async () => {
    if (githubUser) {
      try {
        const res = await axios(`${rootUrl}/rate_limit`);
        let {
          data: {
            rate: { remaining },
          },
        } = res;
        setRequestRate(remaining);
        if (remaining === 0) {
          toggleError(
            true,
            "sorry, you've exceeded your hourly request limit :)!."
          );
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  function toggleError(show = false, msg = "") {
    setError({ show, msg });
  }

  useEffect(() => {
    checkRequestRate();
  });

  useEffect(() => {
    let timeOut;
    if (error.show) {
      timeOut = setTimeout(toggleError, 1000);
    }
    return () => {
      if (timeOut) {
        clearTimeout(timeOut);
      }
    };
  });
  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requestRate,
        error,
        getGithubUser,
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
