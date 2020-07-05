import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppRouter from "./routers/AppRouter";
import {
  addExpense,
  removeExpense,
  editExpense,
} from "./redux/actions/expenses";

const App = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses);
  const [expenseTwo, setExpenseTwo] = useState(null);
  useEffect(() => {
    dispatch(
      addExpense({
        description: "Rent",
        amount: 100,
      })
    );
    dispatch(
      addExpense({
        description: "Coffe",
        amount: 300,
      })
    );
  }, []);

  if (expenses.length === 2) {
    const expenseOne = expenses[0];
    setExpenseTwo(expenses[1]);
    dispatch(removeExpense({ id: expenseOne.id }));
  }

  if (expenseTwo) {
    console.log(expenseTwo);
    dispatch(editExpense(expenseTwo.id, { amount: 500 }));
    setExpenseTwo(null);
  }

  return <AppRouter />;
};

export default App;
