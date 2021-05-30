import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchModal from "./pages/SearchModal";
import { Error, Loader } from "./components";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const PageError = lazy(() => import("./pages/Error"));
function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <SearchModal />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
          <Route path="*">
            <PageError />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
