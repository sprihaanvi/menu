const express=require('express');
const router=express.Router();
const Orders = require("../models/Orders");
router.post('/myorders',async (req,res)=>{
    try{
        let mydata=await Orders.findOne({email:req.body.email})
        // console.log(mydata);
        res.json({orderData:mydata})
    }
    catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
})

module.exports=router;