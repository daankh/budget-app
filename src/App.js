import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startSetExpenses } from "./redux/actions/expenses"
import AppRouter from "./routers/AppRouter";

const App = () => {
  const dispatch = useDispatch();
  const [expensesFetching, setExpensesFetching] = useState(true);
  useEffect(() => {
    dispatch(startSetExpenses()).then(() => {
      setExpensesFetching(false)
    })
  }, [])
  return (
    expensesFetching ? <p>Loading...</p> : <AppRouter data-test="AppRouter" />
  )
};

export default App;
