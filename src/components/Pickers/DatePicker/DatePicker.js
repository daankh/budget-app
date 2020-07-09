import React from "react";
import MomentUtils from "@date-io/moment";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

const Picker = ({ createdAt, setCreatedAt }) => {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DatePicker
        label={"Date"}
        value={createdAt}
        onChange={(date) => {
          setCreatedAt(date);
        }}
        format="DD.MM.YYYY"
        animateYearScrolling
        inputVariant={"outlined"}
      />
    </MuiPickersUtilsProvider>
  );
};

export default Picker;
