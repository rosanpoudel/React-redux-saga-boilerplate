import React from "react";
import { Route, Redirect } from "react-router-dom";
import LocalDb from "../localStorage";

export default function PublicRoute({ path, exact, component: Component }) {
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) =>
        LocalDb.isLogin() ? <Component /> : <Redirect to="/" />
      }
    />
  );
}
