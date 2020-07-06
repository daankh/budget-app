import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/store/configureStore";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./styles/main.scss";

import { addExpense } from "./redux/actions/expenses";

const store = configureStore();

store.dispatch(
  addExpense({ description: "Water bill", amount: 4500, createdAt: 100 })
);
store.dispatch(
  addExpense({ description: "Gas bill", amount: 5000, createdAt: 200 })
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
