import React from "react";
import { Dashboard, Error, SearchModal } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <SearchModal />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
