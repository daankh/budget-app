import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppRouter from "./routers/AppRouter";
import { addExpense, removeExpense } from "./redux/actions/expenses";

const App = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses);
  useEffect(() => {
    dispatch(
      addExpense({
        description: "Rent",
        amout: 100,
      })
    );
    dispatch(
      addExpense({
        description: "Coffe",
        amout: 300,
      })
    );
  }, []);

  if (expenses.length === 2) {
    const expenseOne = expenses[0];
    const expenseTwo = expenses[1];
    dispatch(removeExpense({ id: expenseOne.id }));
  }

  return <AppRouter />;
};

export default App;
