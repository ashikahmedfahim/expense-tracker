import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expenseDate = new Date();
  const expenseTitle = "Car Insurance";
  const expenseAmount = "230";
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString().substr(0, 10)}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">$ {expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
