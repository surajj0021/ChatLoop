 import express from "express"
 import dotenv from "dotenv"
import connectDb from "./config/db.js";
dotenv.config()

const port =process.env.PORT || 5000

const app=express();

app.get('/',(req,res)=>{
    res.send("Server is running");
})

app.listen(port,()=>{

    console.log("🟢  server Started")
})




