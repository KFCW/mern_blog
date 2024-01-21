const User = require("../models/userModel")
const bcryptjs = require("bcryptjs")
const {errorHandler} = require("../utils/error")

const signup = async (req, res, next) => {
    const {username, email , password} = req.body;

    if(!username || !email || !password || username === '' || email === '' || password === ''){
        next(errorHandler(400, "Veuillez remplir tous les champs!"))
    }


    
    const hashPassword =  bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password : hashPassword 
    })
    try {
        await newUser.save();
        res.status(201).json({message : "User enregisré avec succès !"})
    }catch(e) {
        next(e)
    }
}





module.exports = {signup}