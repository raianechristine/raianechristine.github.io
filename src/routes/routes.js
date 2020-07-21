import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import urls from "utils/constants/urls";
import Home from "containers/Home";

const Routes = () => {
  const { ROUTES } = urls;

  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.home.path} component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
