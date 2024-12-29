const {fetchExpenses,addExpenses,deleteExpenses} = require('../Controllers/ExpenseController');

const router = require('express').Router();

// fetch all expenses from user_id
router.get('/',fetchExpenses);
router.post('/',addExpenses);
router.delete('/expenseId',deleteExpenses);


module.exports = router;


