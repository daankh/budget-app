import React from "react";
import { useParams } from "react-router-dom";

const EditExpensePage = () => {
  const params = useParams();
  const { id } = params;
  return <div>Editing the expense with the id {id}</div>;
};

export default EditExpensePage;
