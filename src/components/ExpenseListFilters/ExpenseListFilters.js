import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTextFilter } from "../../redux/actions/filters";

const ExpenseListFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((props) => props.filters);
  const { text: textFilter } = filters;

  const onSearchInputChangeHandler = (e) => {
    const { value } = e.target;
    dispatch(setTextFilter(value));
  };

  return (
    <div>
      <input
        type="text"
        value={textFilter}
        onChange={onSearchInputChangeHandler}
      />
    </div>
  );
};

export default ExpenseListFilters;
