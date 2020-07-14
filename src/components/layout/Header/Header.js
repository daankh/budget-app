import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header data-test="Header">
    <h1 data-test="heading">Expensify</h1>
    <nav data-test="navigation">
      <NavLink data-test="link-dashboard" exact to="/" activeClassName={"is-active"}>
        Dashboard
      </NavLink>
      <NavLink data-test="link-create-expense" to="/create" activeClassName={"is-active"}>
        Create Expense
      </NavLink>
      {/* <NavLink data-test="link-help" to="/help" activeClassName={"is-active"}>
        Help
      </NavLink> */}
    </nav>
  </header>
);

export default Header;
