import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const handleYearChange = (year) => {
    setFilteredYear(year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={filteredYear} onYearChange={handleYearChange} />
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expense;
