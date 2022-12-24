const mongoose=require("mongoose")


const customerSchema = new mongoose.Schema({
   
    firstName :{
        type:String
    },
    lastName:{
        type:String
    },
    mobileNumber :{
        type:String,
        length:10
    },
    DOB : {
        type:Date

    },
    emailID :{
        type:String,

    },
    address  :{
        type:String
    },
    customerID :{
        type:String
    },
    status :{
        type:String
    } ,
},{timestamps:true})

module.exports=new mongoose.model("customer",customerSchema)