import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isAuthenticated } = useAuth0();
  const isUser = isAuthenticated && user;
  // all routes has a render method that returns the children giving to it route
  // which means we can rewrite what the return method to redirect on condition
  return (
    <Route
      {...rest}
      render={() => {
        return isUser ? children : <Redirect to="/login" />;
      }}
    ></Route>
  );
};
export default PrivateRoute;
