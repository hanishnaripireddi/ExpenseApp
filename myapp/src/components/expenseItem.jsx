import React, { useState } from "react";

import "./expenseitem.css";
import Card from "./Card";


function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  


  const month = props.date.toLocaleString("en-Us", { month: "long" });
  const day = props.date.toLocaleString("en-Us", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <Card className="expense-item">
      <div className="expense-date">
        <div>{month}</div>
        <div className="expense-date__day">{day}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">&#8377;{props.amount}/-</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
