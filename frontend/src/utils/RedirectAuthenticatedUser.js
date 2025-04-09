import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthStore } from "../authStore/authStore";
// import { useAuthStore } from "../store/authStore"; // Import auth store

const RedirectAuthenticatedUser = ({ component: Component, ...rest }) => {
  const { isAuthenticated, user } = useAuthStore();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && user?.isVerified ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default RedirectAuthenticatedUser;
