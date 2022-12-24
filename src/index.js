const express = require("express")
const app = express()
const port = 3000
const mongoose= require("mongoose")
const route = require("./routes/route.js")

app.use(express.json())
mongoose.set('strictQuery', true)


mongoose.connect("mongodb+srv://Amrata:Y99l58O8175g88R8@cluster0.xictrjh.mongodb.net/company-DB", {useNewurlParser:true})
.then(()=>console.log("mongoDB connected"))
.catch((err)=>console.log(err.message))

app.use("/", route)

app.listen(port,function(){
    console.log("express app running on the port 3000")
})