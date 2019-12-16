import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => (
  <Router>
    <MainNavigation />
    <main>
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/places/new" component={NewPlace} />
        <Redirect to="/" />
      </Switch>
    </main>
  </Router>
);

export default App;
