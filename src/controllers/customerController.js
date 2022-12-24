const customerModel = require("../models/customerModel.js")
const mongoose = require("mongoose")

const{isValidObjectIds,isvalidMobileNumber,regexName,isvalidEmail} = require("../validators/validator.js")


const createCustomer = async function(req,res){
    try{
        let data = req.body
        const{emailID, mobileNumber ,customerID, } = data
        if(!emailID) return res.status(400).send({status:false,message:"email is required"})
        if(!isvalidEmail(emailID)) return res.status(400).send({status:false,message:"please provide a valid email"})

         if(!mobileNumber) return res.status(400).send({status:false,message:"mobileNumber is required"})
        if(!isvalidMobileNumber(mobileNumber)) return res.status(400).send({status:false,message:"please provide valid mobile number!"})

        // if(!regexName(customerID)) return res.status(400).send({status:false,message:"custorID should be valid"})

        let savedData = await customerModel.create(data)
        res.status(201).send({status:true,data:savedData})

    }catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}

const getCostomer = async function(req,res){
    try{
        const data = await customerModel.find({status:ACTIVE})
        res.status(200).send({satus:true,data:data})

    }catch(err){
        return res.status(500).send({satus:false,message:err.message})
    }
}

const deleteCustomer =async function(req,res){
    try{
         const customerId =req.params.customerID

  if(!isValidObjectIds(customerId)) return res.status(400).send({status:false,message:"customerID is not valid"})
  const findUser = await customerModel.findOne({_id:customerId,status:false})
  if(!findUser) return res.status(404).send({status:false,message:"User not found"})
  let deleteCus =await customerModel.findOneAndUpdate({_id:customerId},{status:INACTIVE})
   return res.status(200).send({status:true,message:"data deleted successfully"})
    }
    catch(error){
        return res.status(500).send({status:false,message:error.message})
    }
}


module.exports={createCustomer,getCostomer,deleteCustomer }