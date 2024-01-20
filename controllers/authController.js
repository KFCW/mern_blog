const User = require("../models/userModel")
const bcryptjs = require("bcryptjs")


const signup = async (req, res) => {
    const {username, email , password} = req.body;

    if(!username || !email || !password || username === '' || email === '' || password === ''){
        return res.status(400).json({message : "Veuillez remplir tous les champs!"})
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
        res.status(500).json({message : e.message})
    }
}





module.exports = {signup}