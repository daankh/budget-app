import React, { Component } from "react";
import moment from "moment";
import MaterialUIPicker from "../Pickers/DatePicker/DatePicker";

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    const { expense } = this.props;
    this.state = {
      description: expense ? expense.description : "",
      amount: expense ? (expense.amount / 100).toString() : "",
      note: expense ? expense.note : "",
      createdAt: expense ? moment(expense.createdAt) : moment(),
      error: "",
    };
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { description, amount, createdAt, note } = this.state;

    if (!description || !amount) {
      this.setState(() => ({
        error: "Please provide description and amount.",
      }));
    } else {
      onSubmit({
        description,
        amount: parseFloat(amount, 10) * 100,
        createdAt: createdAt.valueOf(),
        note,
      });
      this.setState(() => ({
        description: "",
        amount: "",
        note: "",
        createdAt: moment(),
        error: "",
      }));
    }
  };

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name !== "amount") {
      this.setState(() => ({
        [`${name}`]: value,
      }));
    } else {
      if (!value || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
        this.setState(() => ({
          [`${name}`]: value,
        }));
      }
    }
  };

  setCreatedAt = (createdAt) => {
    this.setState(() => ({
      createdAt,
    }));
  };

  render() {
    const { description, amount, note, createdAt, error } = this.state;
    return (
      <div>
        {error.length ? <p>{error}</p> : null}
        <form onSubmit={this.onFormSubmit}>
          <input
            name="description"
            type="text"
            placeholder="Description"
            autoFocus
            value={description}
            onChange={this.onChangeHandler}
          />
          <input
            name="amount"
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={this.onChangeHandler}
          />
          <MaterialUIPicker
            createdAt={createdAt}
            setCreatedAt={this.setCreatedAt}
          />
          <textarea
            name="note"
            placeholder="Add a note for your expense (optional)"
            value={note}
            onChange={this.onChangeHandler}
          ></textarea>
          <button>Add expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
