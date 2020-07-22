import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { startAddExpense } from "../../../redux/actions/expenses";
import ExpenseForm from "../../ExpenseForm/ExpenseForm";

const AddExpensePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          dispatch(startAddExpense(expense));
          history.push({ pathname: "/" });
        }}
      />
    </div>
  );
};

export default AddExpensePage;
