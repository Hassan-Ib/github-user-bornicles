import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.github.com",
  timeout: 10000,
});

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [followers, setFollowers] = useState(null);
  const [requestRate, setRequestRate] = useState(0);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });

  // console.log({ githubUser, repos, followers });

  const getGithubUser = async (user) => {
    try {
      toggleError();
      setIsloading(true);
      const response = await axiosInstance.get(`/users/${user}`);

      if (response) {
        setGithubUser(response.data);
        const { login, followers_url } = response.data;
        const results = await Promise.allSettled([
          axiosInstance.get(`/users/${login}/repos?per_page=100`),
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
    } catch (err) {
      console.log(err);
      setGithubUser(null);
      setFollowers(null);
      setRepos(null);
      setIsloading(false);
      toggleError(true, `${err.message}`);
    }
  };

  //check rate

  function toggleError(show = false, msg = "") {
    setError({ show, msg });
  }

  useEffect(() => {
    const checkRequestRate = async () => {
      try {
        const res = await axiosInstance.get(`/rate_limit`);
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
    };
    checkRequestRate();
  }, [githubUser]);

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
