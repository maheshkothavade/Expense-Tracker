import React, { useState } from 'react'

function ExpenseTrackerForm() {

    const[expenseInfo,setExpenseInfo] = useState({text:'',amount:''});
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copyExpenseInfo = { ...expenseInfo};
        copyExpenseInfo[name] = value;
        setExpenseInfo(copyExpenseInfo);
    }
  return (
    <div className='container'>
                <h1>Login</h1>
                <form onSubmit={handleExpense}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            onChange={handleChange}
                            type='text'
                            name='text'
                            placeholder='Enter your expense description...'
                            value={expenseInfo.text}
                        />
                    </div>
                    <div>
                        <label htmlFor='amount'>Amount</label>
                        <input
                            onChange={handleChange}
                            type='number'
                            name='amount'
                            placeholder='Enter your amount... expense(-ve) and income(+ve)'
                            value={expenseInfo.amount}
                        />
                    </div>
                    <button type='submit'>Add Expense</button>
                    
                </form>
               
            </div>
  )
}

export default ExpenseTrackerForm
