import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./expenseItem";
import Card from "./Card";
import ExpensesFilter from "./Filter/ExpenseFilter";

function Expenses(props) {
  const [filterYear,setFilterYear] = useState('2022');

  const filterChangeHandler = (selectedYear) =>{
    setFilterYear(selectedYear);
  };

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onFilterChange={filterChangeHandler}/>
      
      {props.items.map( expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)}
      
    </Card>
    </div>
  );
}

export default Expenses;
