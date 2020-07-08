import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editExpense } from "../../../redux/actions/expenses";
import ExpenseForm from "../../ExpenseForm/ExpenseForm";

const EditExpensePage = () => {
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();

  const { id } = params;
  return (
    <div>
      <p>Editing the expense with the id {id}</p>
      <ExpenseForm
        onSubmit={(id, updates) => {
          dispatch(editExpense(id, updates));
          history.push({ pathname: "/" });
        }}
      />
    </div>
  );
};

export default EditExpensePage;
