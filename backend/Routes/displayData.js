const express=require('express');
const router=express.Router();

router.post('/cakemenu',(req,res)=>{
    try{
        // console.log(global.cakeItem)
        res.send([global.cakeItem,global.category]);
    }
    catch(error){
        console.log(error);
        res.status({success:false});

    }
})
module.exports=router;