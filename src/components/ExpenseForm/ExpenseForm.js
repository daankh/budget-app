import React, { Component } from "react";
import { connect } from "react-redux";
import { addExpense, editExpense } from "../../redux/actions/expenses";

class ExpenseForm extends Component {
  state = {
    description: "",
    amount: "",
    note: "",
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { addExpense } = this.props;
    const { description, amount, note } = this.state;
    addExpense({ description, amount, note });
    this.setState(() => ({
      description: "",
      amount: 0,
      note: "",
    }));
  };

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name !== "amount") {
      this.setState(() => ({
        [`${name}`]: value,
      }));
    } else {
      if (value.match(/^\d*(\.\d{0,2})?$/)) {
        this.setState(() => ({
          [`${name}`]: value,
        }));
      }
    }
  };

  render() {
    const { description, amount, note } = this.state;
    return (
      <div>
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

const mapDispatchToProps = (dispatch) => ({
  addExpense: ({ description, note, amount, createdAt }) =>
    dispatch(addExpense({ description, note, amount, createdAt })),
  editExpense: (id, updates) => dispatch(editExpense(id, updates)),
});

export default connect(null, mapDispatchToProps)(ExpenseForm);
