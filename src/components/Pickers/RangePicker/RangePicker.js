import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import MomentUtils from "@date-io/moment";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'

export const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#364051"
    },
  },
  typography: {
    fontSize: "0.9rem",
  },
})


const RangePicker = ({ startDate, endDate, setStartDate, setEndDate }) => {
  const dispatch = useDispatch();
  return (
    <MuiThemeProvider theme={customTheme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DatePicker
          label="Start date"
          value={startDate}
          maxDate={endDate || moment("2100-01-01")}
          onChange={(date) => {
            dispatch(setStartDate(date));
          }}
          format="DD.MM.YYYY"
          animateYearScrolling
          clearable={true}
          inputVariant={"outlined"}
        />
        <DatePicker
          label="End date"
          value={endDate}
          minDate={startDate || moment("1900-01-01")}
          onChange={(date) => {
            dispatch(setEndDate(date));
          }}
          format="DD.MM.YYYY"
          animateYearScrolling
          clearable={true}
          inputVariant={"outlined"}
        />
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
};

export default RangePicker;
