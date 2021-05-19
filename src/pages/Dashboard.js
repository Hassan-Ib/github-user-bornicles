import React from "react";
import {
  Loader,
  Info,
  Repos,
  User,
  Search,
  Navbar,
  Error,
} from "../components";
import { useGithubContext } from "../context/context";

const Dashboard = () => {
  const { isLoading, error } = useGithubContext();
  console.log(error);
  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <Loader />
      </main>
    );
  }
  if (error.show) {
    return (
      <main>
        <Navbar />
        <Search />
        <Error />
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
