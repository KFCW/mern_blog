const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Configuration des variables d'env
dotenv.config()

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connectez à la base de donnée"))
    .catch((err) => console.log(err))

const app = express();




app.listen(3000, () => {
    console.log(`Le serveur est lancé sur le port 3000`)
});