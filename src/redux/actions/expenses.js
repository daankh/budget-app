import { v4 as uuidv4 } from "uuid";
import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE } from "../action-types";

export const addExpense = ({
  description = "",
  note = "",
  amout = 0,
  createdAt = 0,
} = {}) => ({
  type: ADD_EXPENSE,
  expense: {
    id: uuidv4(),
    description,
    note,
    amout,
    createdAt,
  },
});

export const removeExpense = ({ id } = {}) => ({
  type: REMOVE_EXPENSE,
  id,
});