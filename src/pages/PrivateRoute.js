import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useGithubContext } from "../context/context";

const PrivateRoute = ({ children, ...rest }) => {
  const { githubUser } = useGithubContext();

  const isUser = githubUser ? true : false;

  return (
    <Route
      {...rest}
      render={() => {
        return isUser ? children : <Redirect to="/" />;
      }}
    ></Route>
  );
};
export default PrivateRoute;
