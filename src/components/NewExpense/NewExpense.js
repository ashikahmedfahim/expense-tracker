import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const handleSubmit = (expense) => {
    props.onExpenseDataSave({ ...expense, id: Math.random().toString() });
  };
  return (
    <div className="new-expense">
      <ExpenseForm onExpenseDataSave={handleSubmit} />
    </div>
  );
};

export default NewExpense;
