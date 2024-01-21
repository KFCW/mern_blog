const User = require("../models/userModel")
const bcryptjs = require("bcryptjs")
const {errorHandler} = require("../utils/error")
const jwt = require("jsonwebtoken")


const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
  
    // Vérification des champs requis
    if (!username || !email || !password || username === '' || email === '' || password === '') {
      return next(errorHandler(400, "Veuillez remplir tous les champs!"));
    }
  
    // Hachage du mot de passe
    const hashPassword = bcryptjs.hashSync(password, 10);
  
    // Création d'un nouvel utilisateur avec le mot de passe haché
    const newUser = new User({
      username,
      email,
      password: hashPassword,
    });
  
    try {
      // Sauvegarde du nouvel utilisateur dans la base de données
      await newUser.save();
      
      // Réponse au client indiquant que l'utilisateur a été enregistré avec succès
      res.status(201).json({ message: "Utilisateur enregistré avec succès!" });
    } catch (e) {
      // Si une erreur se produit pendant le processus, renvoie l'erreur au gestionnaire d'erreurs global
      next(e);
    }
  };
  

const signin = async (req, res, next) => {
    const { email, password } = req.body;
  
    // Vérification des champs requis
    if (!email || !password || email === "" || password === "") {
      return next(errorHandler(400, "Veuillez remplir tous les champs!"));
    }
  
    try {
      // Recherche de l'utilisateur dans la base de données par son adresse e-mail
      const validUser = await User.findOne({ email });
  
      // Si l'utilisateur n'est pas trouvé, renvoie une erreur 404
      if (!validUser) {
        return next(errorHandler(404, "Utilisateur inexistant"));
      }
  
      // Vérification du mot de passe
      const validPassword = bcryptjs.compareSync(password, validUser.password);
  
      // Si le mot de passe n'est pas valide, renvoie une erreur 400
      if (!validPassword) {
        return next(errorHandler(400, "Mot de passe incorrect!"));
      }
  
      // Génération du jeton JWT
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
  
     // Destructuring de validUser._doc: extraction de la propriété 'password' renommée en 'pass' et capture du reste des propriétés dans 'rest'
      const { password: pass, ...rest  } = validUser._doc;

      
      // Envoi de la réponse au client avec le jeton JWT inclus dans un cookie
      res.status(200)
        .cookie('access_token', token, { httpOnly: true })
        .json({ rest });

  
    } catch (e) {
      // Si une erreur se produit pendant le processus, renvoie l'erreur au gestionnaire d'erreurs global
      next(e);
    }
  };

  const google = async (req, res, next) => {
    const {email, name, googlePhotoUrl} = req.body;
    try{
const user = await User.findOne({ email });
if(user){
  const token = jwt.sign(
    {id: user._id},
    process.env.JWT_SECRET
  );
  const {password, ...rest} = user._doc;
  res.status(200)
  .cookie('access_token', token, {httpOnly: true})
  .json(rest)
}else{ 
  const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
  const hashPassword = bcryptjs.hashSync(generatedPassword, 10);
  const newUser = new User({
    username: name.toLowercase().split(' ').join('') + Math.random().toString(9).slice(-4),
    email,
    password : hashPassword,
    profilePicture : googlePhotoUrl
  })
  await newUser.save();
  const token = jwt.sign(
   { id: newUser._id},
    process.env.JWT_SECRET
  )
  const {password, ...rest} = newUser._doc;
  res.status(200)
  .cookie('access_token', token, {httpOnly: true})
  .json(rest)

 }
    }catch{

    }
  }
  





module.exports = {signup, signin, google}