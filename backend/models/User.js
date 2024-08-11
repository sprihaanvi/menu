const mongoose=require('mongoose');
const {Schema}=mongoose;

const UserSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now

    }

})
module.exports=mongoose.model('user',UserSchema);

//data insert create model ki help se hota hai.
//its a wrapper foryour schema