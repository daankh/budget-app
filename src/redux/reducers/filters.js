import {
  SET_TEXT_FILTER,
  SORT_BY_DATE,
  SORT_BY_AMOUNT,
  SET_START_DATE,
  SET_END_DATE,
} from "../action-types";

const initialState = {
  text: "",
  sortyBy: "date", //date or amount
  startDate: undefined,
  endDate: undefined,
};
const filtersReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SET_TEXT_FILTER:
      return { ...state };
    case SORT_BY_DATE:
      return { ...state };
    case SORT_BY_AMOUNT:
      return { ...state };
    case SET_START_DATE:
      return { ...state };
    case SET_END_DATE:
      return { ...state };
    default:
      return state;
  }
};

export default filtersReducer;
