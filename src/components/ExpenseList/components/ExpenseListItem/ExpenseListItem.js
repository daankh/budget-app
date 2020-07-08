import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeExpense } from "../../../../redux/actions/expenses";

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Link to={`/edit/${id}`}>
        {" "}
        <h3>{description}</h3>
      </Link>
      <p>
        {amount} - {createdAt}
      </p>

      <button onClick={() => dispatch(removeExpense({ id }))}>Remove</button>
    </div>
  );
};

export default ExpenseListItem;
