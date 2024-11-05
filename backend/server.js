const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send("API is running 123")
})
app.get

app.listen(5000, console.log("Server started on 5000 port"))