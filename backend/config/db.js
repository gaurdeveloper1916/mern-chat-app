const mongoose = require("mongoose");

const connectDB = async () => {
    console.log(process.env.DATABASE_URL)
    const MONGO_URI = process.env.DATABASE_URL

    try {
        const conn = await mongoose.connect(MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit with a non-zero status code to indicate an error
    }
};

module.exports = connectDB;
