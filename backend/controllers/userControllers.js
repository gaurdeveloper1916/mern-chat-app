const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../config/generateToken');

const registerUser = asyncHandler(async (req, res) => {
    console.log(req.body)
    const { name, email, password, pic } = req.body

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please enter all the fields")
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.send(400);
        throw new Error("User Already Exists")
    }

    const user = await User.create({
        name, email, password, pic
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id)
        })
    } else {
        throw new Error('failed to create a user')
    }
})

// /api/users?search=kartik
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (user && user.matchPassword(password)) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id)
        })
    }
})


const allUsers = asyncHandler(async (req, res) => {
    const keyword = req.query
        ? {
            $or: [
                { name: { $regex: req.query.search, $options: "i" } },
                { email: { $regex: req.query.search, $options: "i" } }
            ]
        } : {}

    const users = await User.find(keyword).find({ _id: { $ne: req.user._id } })
    res.send(users)

});
module.exports = { registerUser, authUser, allUsers }