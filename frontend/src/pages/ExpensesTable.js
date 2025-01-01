// import React from 'react';
// //import ReactDOM from 'react-dom'

// function ExpensesTable(expenses,handleDeleteExpense) {
//     console.log("ExpensesTable-->",expenses);
//   return (
//         <div className='expense-list'>
//         {
//            expenses?.map((expense, index)=>(
//            <div key={index} className='expense-item'>
//             <button className='delete-button'
//              onClick={()=>handleDeleteExpense(expense._id)}
//             >X</button>

//             <div className='expense-description'>{expense.text}</div>
//             <div className='expense-amount'
//                 style={{
//                   color: expense.amount > 0 ? 'green' : 'red',
//                 }}
//             >{expense.amount}</div>

//            </div>
//            ))
//         }
       
//         </div>
//   )
// }

// export default ExpensesTable;


import React from 'react';

// function ExpensesTable({ expenses = [], handleDeleteExpense }) { // Default value for expenses
//     console.log("ExpensesTable-->", expenses);
//     return (
//         <div className='expense-list'>
//             {
//                 expenses?.map((expense, index) => (
//                     <div key={index} className='expense-item'>
//                         <button
//                             className='delete-button'
//                             onClick={() => handleDeleteExpense(expense._id)}
//                         >X</button>

//                         <div className='expense-description'>{expense.text}</div>
//                         <div
//                             className='expense-amount'
//                             style={{
//                                 color: expense.amount > 0 ? 'green' : 'red',
//                             }}
//                         >{expense.amount}</div>
//                     </div>
//                 ))
//             }
//         </div>
//     );
// }
const ExpensesTable = ({ expenses, handleDeleteExpense }) => {
  return (
      <div className='expense-list'>
          {
              expenses.map((expense, index) => (
                  <div key={index} className='expense-item'>
                      <button
                          className='delete-button'
                          onClick={() => handleDeleteExpense(expense._id)}
                      >X</button>

                      <div className='expense-description'>{expense.text}</div>
                      <div
                          className='expense-amount'
                          style={{
                              color: expense.amount > 0 ? 'green' : 'red',
                          }}
                      >{expense.amount}</div>
                  </div>
              ))
          }
      </div>
  );
};


export default ExpensesTable;
