import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  const titleChangeHandler = (e) => {
    setNewTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setNewAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setNewDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: newTitle,
      amount: +newAmount,
      date: new Date(newDate),
    };

    props.onSaveExpenseData(expenseData);
    setNewTitle('');
    setNewAmount('');
    setNewDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title:</label>
          <input
            type="text"
            value={newTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount:</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={newAmount}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date:</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-01-01"
            value={newDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
