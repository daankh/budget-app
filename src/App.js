import React from "react";
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";

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
  return (
    <div>
      404! - <Link to="/">Go home</Link>
    </div>
  );
};

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <nav>
      <NavLink exact to="/" activeClassName={"is-active"}>
        Dashboard
      </NavLink>
      <NavLink to="/create" activeClassName={"is-active"}>
        Create Expense
      </NavLink>
      <NavLink to="/edit" activeClassName={"is-active"}>
        Edit Expense
      </NavLink>
      <NavLink to="/help" activeClassName={"is-active"}>
        Help
      </NavLink>
    </nav>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

const App = () => {
  return routes;
};

export default App;
