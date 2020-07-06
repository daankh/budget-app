import React from "react";
import { connect } from "react-redux";

const ExpenseList = ({ expenses, filters }) => {
  return (
    <div>
      <h1>Expense list</h1>
      {expenses.length &&
        expenses.map((expense, index) => {
          const { description, amount } = expense;
          return (
            <div key={index}>
              {description} - {amount / 100}$
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (props) => ({
  expenses: props.expenses,
  filters: props.filters,
});

export default connect(mapStateToProps)(ExpenseList);
