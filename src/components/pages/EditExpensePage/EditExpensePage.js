import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editExpense } from "../../../redux/actions/expenses";
import ExpenseForm from "../../ExpenseForm/ExpenseForm";

const EditExpensePage = () => {
  const history = useHistory();
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  const expense = useSelector((props) =>
    props.expenses.find((expense) => expense.id === id)
  );

  return (
    <div>
      <p>Editing the expense with the id {id}</p>
      <ExpenseForm
        expense={expense}
        onSubmit={(expense) => {
          dispatch(editExpense(id, expense));
          history.push({ pathname: "/" });
        }}
      />
    </div>
  );
};

export default EditExpensePage;
