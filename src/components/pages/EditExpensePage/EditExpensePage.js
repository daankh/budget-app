import React from "react";
import { useParams } from "react-router-dom";
import ExpenseForm from "../../ExpenseForm/ExpenseForm";

const EditExpensePage = () => {
  const params = useParams();
  const { id } = params;
  return (
    <div>
      <p>Editing the expense with the id {id}</p>
      <ExpenseForm />
    </div>
  );
};

export default EditExpensePage;
