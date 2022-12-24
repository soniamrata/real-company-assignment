const cardModel = require("../models/cardModel.js")
const mongoose = require("mongoose")
const{isValidObjectIds}= require("../validators/validator.js")


const createCard = async function(req,res){
    
        try{
            let data=req.body
             data.status=data.status.toUpperCase()
            if(Object.keys(data).length==0){
                return res.status(400).send({status:false,msg:"provide data to create"})
            }
            if(!isValidCardNumber(data.cardNumber)) return res.status(400).send({status:true,msg:"provide valid card number"})
            let oldcart=await cardModel.findOne({cardNumber:data.cardNumber,status:"ACTIVE"})
            if(oldcart)return res.status(400).send({status:false,msg:"this card no already exist"})
          
    
           if(data.cardType!=="REGULAR" || data.cardType=="SPECIAL"){
            return res.status(400).send({status:false,msg:"provide valid cardType info between REGULAR & SPECIAL"})}
        
    
    
            if(!isValidString(data.customerName)) return res.status(400).send({status:false,msg:"provide valid customerName"})
            if(data.status){
            if(data.status!=="ACTIVE" || data.status=="INACTIVE"){
                return res.status(400).send({status:false,msg:"provide valid status info"})}
                    }
             if(!isValidObjectId(data.customerID)) return res.status(400).send({status:false,msg:"provide valid cutomerId"})
                    
                
                    const cardCreation=await cardModel.create(data)
            return res.status(201).send({status:true,data:cardCreation})
        }
        catch(error){
            return res.status(500).send({status:true,msg:error.message})
        }
    }

const getCard = async function(req,res){
    try{
        const fetchCards = await cardModel.find()
        res.status(200).send({staus:true,message:successfull,data:fetchCards})

    }catch(err){
        return res.status(500).send({staus:false,message:err.message})
        
    }
}

module.exports={createCard,getCard}