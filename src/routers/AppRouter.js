import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import ExpenseDashboardPage from "../components/pages/ExpenseDashboardPage/ExpenseDashboardPage";
import AddExpensePage from "../components/pages/AddExpensePage/AddExpensePage";
import EditExpensePage from "../components/pages/EditExpensePage/EditExpensePage";
import HelpPage from "../components/pages/HelpPage/HelpPage";
import NotFoundPage from "../components/pages/NotFoundPage/NotFoundPage";
import LoginPage from "../components/pages/LoginPage/LoginPage";
import PrivateRoute from "./components/PrivateRoute";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
