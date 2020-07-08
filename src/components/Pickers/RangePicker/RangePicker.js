import React from "react";
import { useDispatch } from "react-redux";
import MomentUtils from "@date-io/moment";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

const RangePicker = ({ startDate, endDate, setStartDate, setEndDate }) => {
  const dispatch = useDispatch();
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DatePicker
        label="Start date"
        value={startDate}
        maxDate={endDate}
        onChange={(date) => {
          dispatch(setStartDate(date));
        }}
        format="DD.MM.YYYY"
        animateYearScrolling
      />
      <DatePicker
        label="End date"
        value={endDate}
        minDate={startDate}
        onChange={(date) => {
          dispatch(setEndDate(date));
        }}
        format="DD.MM.YYYY"
        animateYearScrolling
      />
    </MuiPickersUtilsProvider>
  );
};

export default RangePicker;
