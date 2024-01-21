const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email : {type : String , required : true, unique: true},
    password : {type : String, required: true},
    profilePicture: { type : String , default: "https://img.freepik.com/vecteurs-premium/photo-profil-avatar-homme-illustration-vectorielle_268834-538.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1705190400&semt=ais"}
},
{timestamps : true}
);

const User = mongoose.model("User", userSchema)

module.exports = User;