import React, { useState } from "react";
import "./ExpenseForm.css";



const ExpenseForm = (props) => {
  //use-state
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const [enteredAmount, setEnteredAmount] = useState("");

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  // //use-state-alt
  // const [userInput,setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  // });
  // const titleChangeHandler = (e) => {
  //     setUserInput((prevState) => {
  //         return { ...prevState, enteredTitle:e.traget.value};
  //     })
  // };
  // const amountChangeHandler = (e) => {
  //     setUserInput((prevState) => {
  //         return { ...prevState, enteredAmount:e.traget.value};
  //     })
  // };
  // const dateChangeHandler = (e) => {
  //     setUserInput((prevState) => {
  //         return { ...prevState, enteredDate:e.traget.value};
  //     })
  // };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            required
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-01-01"
            required
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

