// Importation du composant Button de flowbite-react et des icônes d'authentification Google
import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import {useDispatch} from "react-redux";
import {signInSuccess} from "../../redux/user/userSlice"
import {useNavigate} from "react-router-dom"
// Importation des modules d'authentification Firebase
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

// Importation de l'instance Firebase (app) configurée ailleurs dans le code
import app  from "../firebase";

// Définition du composant OAuth
const OAuth = () => {
    // Initialisation de l'instance d'authentification Firebase
    const auth = getAuth(app);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // Gestionnaire de clic pour l'authentification Google
    const handleGoogleClick = async () => {
        // Création d'une instance de GoogleAuthProvider pour l'authentification Google
        const provider = new GoogleAuthProvider();
        
        // Configuration des paramètres personnalisés, comme le choix du compte Google
        provider.setCustomParameters({ prompt: "select_account" });

        try {
            // Authentification via une fenêtre contextuelle (popup) avec Google
            const resultsFromGoogle = await signInWithPopup(auth, provider);
            console.log(resultsFromGoogle)
            const res = await fetch("/api/auth/google", {
                method: "POST",
                headers: {"Content-Type": 'application/json'},
                body: JSON.stringify({
                    name: resultsFromGoogle.user.displayName,
                    email: resultsFromGoogle.user.email,
                    googlePhotoUrl: resultsFromGoogle.user.photoURL,
                })                                                                                                                                               
            });
            const data = await res.json()
            if(res.ok){
                dispatch(signInSuccess(data))
                navigate("/")
            }

            // Les résultats de l'authentification Google sont disponibles dans resultsFromGoogle
        } catch (error) {
            // Gestion des erreurs liées à l'authentification Google
            console.error("Erreur d'authentification Google:", error);
        }
    };

    return (
        <Button type="button" gradientDuoTone="pinkToOrange" outline onClick={handleGoogleClick}>
            <AiFillGoogleCircle className="w-6 h-6" />
            Continuez avec Google
        </Button>
    );
};


export default OAuth;
