import React from "react";

import {
    BrowserRouter as Router, Route,
    Switch,
    Redirect,
  } from 'react-router-dom';
  
  
import { ClassifierPage } from "../pages/ClassifierPage";
import { LinksClassifierPage } from "../pages/LinksClassifierPage";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/LinkClassifier" component={ LinksClassifierPage } />
          <Route exact path="/" component={ ClassifierPage } />

          <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
  );
};
