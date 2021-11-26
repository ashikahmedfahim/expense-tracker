import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>March 2014</div>
      <div className="expense-item__description">
        <h2>Car Insdurance</h2>
        <div className="expense-item__price">$231</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
