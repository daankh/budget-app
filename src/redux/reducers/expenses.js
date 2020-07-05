import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE } from "../action-types";

const initialState = [];
const expensesReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ADD_EXPENSE: {
      const { expense } = action;
      return [...state, { ...expense }];
    }
    case REMOVE_EXPENSE: {
      const { id } = action;
      return state.filter((expense) => expense.id !== id);
    }
    case EDIT_EXPENSE: {
      const { id, updates } = action;
      return state.map((expense) => {
        if (expense.id === id) {
          return {
            ...expense,
            ...updates,
          };
        } else {
          return expense;
        }
      });
    }
    default:
      return state;
  }
};

export default expensesReducer;
