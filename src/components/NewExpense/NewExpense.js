import React, { useState} from 'react'
import './newexpense.css'
import ExpenseForm from './ExpenseForm'


const NewExpense = (props) => {


  const [editing,setEditting] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData ={
        ...enteredExpenseData,
        id: Math.random()*1000,
    };
    props.onAddExpense(expenseData);
  };
    

  const startEditindHandler= () =>{
    setEditting(true);

  };

  const stopEditing = () => {
    setEditting(false);

  };

  return (
    <div className="new-expense">
      {!editing && <button onClick={startEditindHandler}>Add new Expenses</button>}

      {editing && <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler} onCancel={stopEditing}/>}
    </div>
  )
}

export default NewExpense;
