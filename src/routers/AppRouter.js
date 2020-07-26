import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "../components/layout/Header/Header";
import ExpenseDashboardPage from "../components/pages/ExpenseDashboardPage/ExpenseDashboardPage";
import AddExpensePage from "../components/pages/AddExpensePage/AddExpensePage";
import EditExpensePage from "../components/pages/EditExpensePage/EditExpensePage";
// import HelpPage from "../components/pages/HelpPage/HelpPage";
import NotFoundPage from "../components/pages/NotFoundPage/NotFoundPage";
import LoginPage from "../components/pages/LoginPage/LoginPage";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/dashboard" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        {/* <Route path="/help" component={HelpPage} /> */}
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
