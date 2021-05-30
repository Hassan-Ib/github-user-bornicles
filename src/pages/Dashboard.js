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

  console.log("redering several times");

  if (isLoading) {
    return <Loader />;
  }
  if (error.show) {
    return <Error />;
  }

  return (
    <main>
      <Navbar />
      <div className="section-center">
        <Search />
        <Info />
        <User />
        <Repos />
      </div>
    </main>
  );
};

export default Dashboard;
