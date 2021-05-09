import React from "react";
import { Info, Repos, User, Search, Navbar, Error } from "../components";
import loadingImage from "../images/preloader.gif";
import { useGithubContext } from "../context/context";

const Dashboard = () => {
  const { isLoading, error } = useGithubContext();
  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} alt="loading" className="loading-img" />
      </main>
    );
  }
  if (error.show) {
    return (
      <main>
        <Navbar />
        <Search />
        <Error />
        <img src="" alt="" />
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
