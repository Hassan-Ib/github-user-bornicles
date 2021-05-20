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
  if (isLoading) {
    return <Loader />;
  }
  if (error.show) {
    return <Error />;
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
