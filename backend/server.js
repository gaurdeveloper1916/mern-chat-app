const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const userRoute = require("./routes/userRoute")
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
dotenv.config()

connectDB();

const app = express();
app.use(express.json()) // to accept json data
app.get('/', (req, res) => {
    res.send("API is running 123")
})
app.use('/api/user', userRoute)
app.use(notFound)
app.use(errorHandler)
app.listen(9000, console.log("Server started on 9000 port"))
