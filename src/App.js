import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startSetExpenses } from "./redux/actions/expenses"
import AppRouter, { history } from "./routers/AppRouter";
import { firebase } from "./firebase/firebase";

const App = () => {
  const dispatch = useDispatch();
  const [expensesFetching, setExpensesFetching] = useState(true);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(startSetExpenses()).then(() => {
          setExpensesFetching(false);
        })
        history.push("/dashboard")
      } else {
        setExpensesFetching(false);
        history.push("/")
      }
    })
  }, [dispatch])
  return (
    expensesFetching ? <p>Loading...</p> : <AppRouter data-test="AppRouter" />
  )
};

export default App;
