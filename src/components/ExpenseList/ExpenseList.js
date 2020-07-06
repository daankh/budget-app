import React from "react";
import { useSelector } from "react-redux";
import { getVisibleExpenses } from "../../redux/selectors/expenses";
import ExpenseListItem from "./components/ExpenseListItem/ExpenseListItem";

const ExpenseList = () => {
  const expenses = useSelector((state) =>
    getVisibleExpenses(state.expenses, state.filters)
  );
  return (
    <div>
      <h1>Expense list</h1>
      {expenses.map((expense) => {
        const { id, description, amount, createdAt } = expense;
        return (
          <ExpenseListItem
            key={id}
            id={id}
            description={description}
            amount={amount}
            createdAt={createdAt}
          />
        );
      })}
    </div>
  );
};

export default ExpenseList;
