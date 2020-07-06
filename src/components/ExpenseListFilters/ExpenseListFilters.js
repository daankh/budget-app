import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
} from "../../redux/actions/filters";

const ExpenseListFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((props) => props.filters);
  const { text: textFilter, sortBy } = filters;

  const onSearchInputChangeHandler = (e) => {
    const { value } = e.target;
    dispatch(setTextFilter(value));
  };

  const onSortSelectChangeHandler = (e) => {
    const { value } = e.target;
    switch (value) {
      case "date":
        dispatch(sortByDate());
        break;
      case "amount":
        dispatch(sortByAmount());
        break;
      default:
        dispatch(sortByDate());
    }
  };

  return (
    <div>
      <input
        type="text"
        value={textFilter}
        onChange={onSearchInputChangeHandler}
      />
      <select value={sortBy} onChange={onSortSelectChangeHandler}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
};

export default ExpenseListFilters;
