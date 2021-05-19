import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loader from "./components/Loader";
import SearchModal from "./pages/SearchModal";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Error = lazy(() => import("./pages/Error"));

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
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
