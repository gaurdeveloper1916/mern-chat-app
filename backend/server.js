const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
dotenv.config()

connectDB();

const app = express();
app.get('/',(req,res)=>{
    res.send("API is running 123")
})
app.get('/chats',(req,res)=>{
    res.send([{name:"kartik",age:21,fatherName:"ramesh"},{name:"bhanu",age:22,fatherName:"ramu"}])
})
app.get

app.listen(9000, console.log("Server started on 9000 port"))