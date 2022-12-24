const express =require('express')
const router=express.Router();
const customerController = require("../controllers/customercontroller.js")
const cardController = require("../controllers/cardController.js")


/******************************customer api****************************************** */
router.post("/customerCreation",customerController.createCustomer)
router.get("/fetchCustomer",customerController.getCostomer)
router.delete("/deleteCustomer",customerController.deleteCustomer)

//*********************cards apis************************************************** */
router.post("/postCard",cardController.createCard)
router.get("/fetchCard",cardController.getCard)





module.exports=router;