import React from "react";
import { Route, Switch } from "react-router-dom";
import Articles from "./containers/Articles";
import ArticleDetail from "./containers/ArticleDetail";
import Login from "./containers/Login";
import Signup from "./containers/Signup";

const BaseRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Signup} />
        <Route exact path="/:articleID" component={ArticleDetail} />
      </Switch>
    </>
  );
};

export default BaseRouter;
