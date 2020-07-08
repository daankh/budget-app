import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../../redux/actions/filters";
import RangePicker from "../Pickers/RangePicker/RangePicker";

const ExpenseListFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((props) => props.filters);
  const { text: textFilter, sortBy, startDate, endDate } = filters;

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
      <RangePicker
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
    </div>
  );
};

export default ExpenseListFilters;
