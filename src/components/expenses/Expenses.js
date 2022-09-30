import React, { useState } from "react";
import "./expenses.css";
import ExpenseItem from "../expenseitems/ExpenseItem";
import ExpensesFilter from "../expensefilter/ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ items }) => {
  const [filteredYear, setFilterdYear] = useState("2022");

  const yearChangeHandler = (e) => {
    setFilterdYear(e);
  };

  const filterExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeYear={yearChangeHandler}
        />
        <ExpensesChart expenses={filterExpenses}/>
        {/* {filteredYear === "All"} */}
        {filterExpenses.length === 0 ? (
          <p>None found</p>
        ) : (
          filterExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Expenses;
