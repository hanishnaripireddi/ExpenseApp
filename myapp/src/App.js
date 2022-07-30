import React,{ useState } from 'react';
import Expenses from './components/Expenses.jsx'
import NewExpense from './components/NewExpense/NewExpense.jsx';


const DUMMY_EXPENSES = [
  {
    id: "e3",
    title: "Car insurance",
    amount: 0,
    date: new Date(2021, 2, 28),
  },
  
];


const App = () => {

  const [expenses, setExpenses] =useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) =>{
      return [expense, ...prevExpenses]
    });
  };


  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items = {expenses}/>
    </div>
  );
}





export default App;
