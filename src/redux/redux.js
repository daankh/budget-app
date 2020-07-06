import { createStore, combineReducers } from "redux";
import expensesReducer from "./reducers/expenses";
import filtersReducer from "./reducers/filters";

const getVisibleExpenses = (expenses, filters) => {
  const { text: filterText, sortBy, startDate, endDate } = filters;
  return expenses
    .filter((expense) => {
      const { createdAt, description: expenseText } = expense;
      const startDateMatch =
        typeof startDate !== "number" || createdAt >= startDate;
      const endDateMatch = typeof endDate !== "number" || createdAt <= endDate;
      const textMatch = expenseText
        .toLowerCase()
        .includes(filterText.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt - b.createdAt;
      } else {
        return a.amount - b.amount;
      }
    });
};

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
