import React from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../../../redux/actions/expenses";
import ExpenseForm from "../../ExpenseForm/ExpenseForm";

const AddExpensePage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          dispatch(addExpense(expense));
        }}
      />
    </div>
  );
};

export default AddExpensePage;
