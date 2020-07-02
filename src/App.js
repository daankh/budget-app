import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const ExpenseDashboardPage = () => {
  return <div>This is from my dashboard component</div>;
};

const AddExpensePage = () => {
  return <div>This is from my add expense component</div>;
};

const EditExpensePage = () => {
  return <div>This is from my edit component</div>;
};

const HelpPage = () => {
  return <div>This is from my help component</div>;
};

const NotFoundPage = () => {
  return <div>404!</div>;
};

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path={"/"} component={ExpenseDashboardPage} />
      <Route path={"/create"} component={AddExpensePage} />
      <Route path={"/edit"} component={EditExpensePage} />
      <Route path={"/help"} component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

const App = () => {
  return routes;
};

export default App;
