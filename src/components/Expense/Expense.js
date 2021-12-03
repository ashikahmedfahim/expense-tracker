import React, { useState } from "react";

import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const handleYearChange = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === parseInt(filteredYear)
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onYearChange={handleYearChange}
        />
        <ExpenseList filteredExpenses={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expense;
