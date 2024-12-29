import React from 'react';
//import ReactDOM from 'react-dom'

function ExpensesTable(expenses) {
    console.log("ExpensesTable-->",expenses);
  return (
        <div className='expense-list'>
        {
           expenses?.map((expense, index)=>(
           <div key={index} className='expense-item'>
            <button className='delete-button'>X</button>
            <div className='expense-description'>{expense.text}</div>
            <div className='expense-amount'
                style={{
                  color: expense.amount > 0 ? 'green' : 'red',
                }}
            >{expense.amount}</div>

           </div>
           ))
        }
       
        </div>
  )
}

export default ExpensesTable
