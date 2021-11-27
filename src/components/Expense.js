import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "./Card";

const Expense = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expense;
