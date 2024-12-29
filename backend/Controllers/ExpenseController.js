const userModel = require("../Models/User");

const addExpenses = async(req,res)=>{
    //res.send('addExpense')'
    const body = req.body;
    const {_id} = req.user;
    try{
       const userData = await userModel.findByIdAndUpdate(
        _id,   // user id
        {
            $push:{expenses:body} // expenses 
        },
        {new:true}       // for returning the updated document
       );
    
       return res.status(200).json({
          message:"Expense added successfully",
          success:true,
          data:userData?.expenses
       })

       
    }catch(err){
      res.status(500).json({
        message:"something went wrong",
        error:err,
        success:false
      })
    }
}

const fetchExpenses = async(req,res)=>{
    const body = req.body;
    const {_id} = req.user;
    try{
       const userData = await userModel.findById(_id).select('expenses');  // user id
       
       return res.status(200).json({
          message:"Fetched Expesnes successfully",
          success:true,
          data:userData?.expenses
       })

       
    }catch(err){
      res.status(500).json({
        message:"something went wrong",
        error:err,
        success:false
      })
    }
}
const deleteExpenses = async(req,res)=>{
    //const body = req.body;
    const {_id} = req.user;
    const {expenseId} = req.params;
    try{
       const userData = await userModel.findByIdAndUpdate(
        _id,   // user id
        {
            $pull:{expenses:{_id:expenseId}} // expenses 
        },
        {new:true}       // for returning the updated document
       );
    
       return res.status(200).json({
          message:"Expense deleted successfully",
          success:true,
          data:userData?.expenses
       })

       
    }catch(err){
      res.status(500).json({
        message:"something went wrong",
        error:err,
        success:false
      })
    }
}

module.exports = {
    addExpenses,
    fetchExpenses,
    deleteExpenses
}