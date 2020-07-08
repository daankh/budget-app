import React from "react";
import MomentUtils from "@date-io/moment";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

const Picker = ({ createdAt, setCreatedAt }) => {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DatePicker
        value={createdAt}
        onChange={(date) => {
          setCreatedAt(date);
        }}
        format="DD.MM.YYYY"
        animateYearScrolling
      />
    </MuiPickersUtilsProvider>
  );
};

export default Picker;
