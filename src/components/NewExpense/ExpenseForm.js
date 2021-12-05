import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const handleTitleChange = (event) => {
    setForm((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };
  const handleAmountChange = (event) => {
    setForm((prevState) => {
      return {
        ...prevState,
        amount: event.target.value,
      };
    });
  };
  const handleDateChange = (event) => {
    setForm((prevState) => {
      return {
        ...prevState,
        date: event.target.value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onExpenseDataSave({ ...form });
    setForm({
      title: "",
      amount: "",
      date: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Title"
            value={form.title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            placeholder="Amount"
            value={form.amount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={form.date}
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
