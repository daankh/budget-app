import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startLogout } from "../../../redux/actions/auth"

const Header = () => {
  const dispatch = useDispatch();
  return (<header data-test="Header">
    <h1 data-test="heading">Expensify</h1>
    <nav data-test="navigation">
      <NavLink data-test="link-dashboard" to="/dashboard" activeClassName={"is-active"}>
        Dashboard
      </NavLink>
      <NavLink data-test="link-create-expense" to="/create" activeClassName={"is-active"}>
        Create Expense
      </NavLink>
      <button data-test="logout-button" onClick={() => dispatch(startLogout())}>Logout</button>
      {/* <NavLink data-test="link-help" to="/help" activeClassName={"is-active"}>
        Help
      </NavLink> */}
    </nav>
  </header>)
};

export default Header;
