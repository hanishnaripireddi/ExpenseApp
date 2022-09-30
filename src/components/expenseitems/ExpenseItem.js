import React from "react";
import './ExpenseItem.css';
import ExpenseDate from "../expensedate/ExpenseDate"


const ExpenseItem = ({title,amount,date}) => { //props

  return (
    <>
      <div className="expense-item">
            <ExpenseDate date={date}/>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">- &#x20b9;{amount}/-</div>
        </div>
      </div>
    </>
  );
};

export default ExpenseItem;
