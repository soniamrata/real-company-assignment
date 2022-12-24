const mongoose=require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const cardSchema = new mongoose.Schema({

    cardNumber  :{
        type:String
 },
    cardType :{
        type:String
    } ,
    customerName:{
        type:String
    },
    status  :{
        type:String,
        defaut: "ACTIVE"
    },
    vision:{
        type:String
    },
    customerID:{
        type:String,
        ref:"customer"
    },
},{timestamps:true  
    
    

})

module.exports=new mongoose.model("card",cardSchema)