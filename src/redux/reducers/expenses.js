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
      const { id: idToRemove } = action;
      return state.filter(({ id }) => id !== idToRemove);
    }
    case EDIT_EXPENSE: {
      return [...state];
    }
    default:
      return state;
  }
};

export default expensesReducer;
