import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/layout/Header/Header";
import ExpenseDashboardPage from "../components/pages/ExpenseDashboardPage/ExpenseDashboardPage";
import AddExpensePage from "../components/pages/AddExpensePage/AddExpensePage";
import EditExpensePage from "../components/pages/EditExpensePage/EditExpensePage";
import HelpPage from "../components/pages/HelpPage/HelpPage";
import NotFoundPage from "../components/pages/NotFoundPage/NotFoundPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
