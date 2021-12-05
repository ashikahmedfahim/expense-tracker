import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const handleSubmit = (expense) => {
    props.onExpenseDataSave({
      ...expense,
      date: new Date(expense.date),
      id: Math.random().toString(),
    });
  };
  const handleChangeEdit = () => {
    setIsEditing((prevState) => !prevState);
  };
  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm onExpenseDataSave={handleSubmit} onCancel={handleChangeEdit}/>
      ) : (
        <button onClick={handleChangeEdit}>Add Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
