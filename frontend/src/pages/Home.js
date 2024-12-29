import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ExpensesTable from './ExpensesTable';
import { APIUrl, handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';    // for notifications of success and error

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [expenses,setExpenses] = useState([]);
    
    const navigate = useNavigate();
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, [])

    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Loggedout');
        setTimeout(() => {
            navigate('/login');
        }, 1000)
    }

    const fetchExpenses = async () => {
        try {
            const url = `${APIUrl}/expenses`;
            const headers = {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            }
            
            const response = await fetch(url, headers);
            if(response.status === 403){
                navigate('/login');
                return;
            }
            const result = await response.json();
            console.log(result.data);
            setExpenses(result.data);
        } catch (err) {
            handleError(err);
        }
    }
    useEffect(() => {
        fetchExpenses()
    }, [])

    return (
        <div>
           <div className='user-section'>
              <h1>Welcome {loggedInUser}</h1>
              <button onClick={handleLogout}>Logout</button>
           </div>
           <ExpensesTable expenses={expenses}/>
            
            <ToastContainer />
        </div>
    )
}

export default Home;