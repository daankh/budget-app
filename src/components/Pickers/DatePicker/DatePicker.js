import React from "react";
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

const Picker = ({ createdAt, setCreatedAt }) => {
  return (
    <MuiThemeProvider theme={customTheme}>
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
    </MuiThemeProvider>
  );
};

export default Picker;
