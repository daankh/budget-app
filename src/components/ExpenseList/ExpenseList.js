import React from "react";
import { connect } from "react-redux";
import { getVisibleExpenses } from "../../redux/selectors/expenses";
import ExpenseListItem from "./components/ExpenseListItem";

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h1>Expense list</h1>
      {expenses.length &&
        expenses.map((expense) => {
          const { id, description, amount, createdAt } = expense;
          return (
            <ExpenseListItem
              key={id}
              description={description}
              amount={amount}
              createdAt={createdAt}
            />
          );
        })}
    </div>
  );
};

const mapStateToProps = (props) => ({
  expenses: getVisibleExpenses(props.expenses, props.filters),
});

export default connect(mapStateToProps)(ExpenseList);
