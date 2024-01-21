const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoute")
const authRoutes = require("./routes/authRoute")

//Configuration des variables d'env
dotenv.config()

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connectez à la base de donnée"))
    .catch((err) => console.log(err))    

const app = express();

app.use(express.json()); 


app.use("/api/user", userRoutes)
app.use("/api/auth", authRoutes)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500; 
    const message = err.message || "Erreur du serveur";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

app.listen(3000, () => {
    console.log(`Le serveur est lancé sur le port 3000`)
});
 