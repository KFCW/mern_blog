// Importation des fonctions nécessaires depuis les bibliothèques Redux Toolkit et redux-persist
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userSlice from './user/userSlice';
import themeSlice from './theme/themeSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Combinaison des slices de réducteur pour créer le réducteur racine
const rootReducer = combineReducers({
    user: userSlice,
    theme: themeSlice
});

// Configuration pour la persistance de l'état avec redux-persist
const persistConfig = {
    key: "root", // Clé de l'objet persistant
    storage, // Type de stockage (local storage par défaut)
    version: 1 // Numéro de version pour gérer les migrations de l'état persistant
};

// Création d'un réducteur persistant en utilisant persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configuration du store Redux avec le réducteur persistant
export const store = configureStore({
  reducer: persistedReducer, // Utilisation du réducteur persistant
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }), // Désactivation de la vérification de la sérialisation
});

// Création d'un persistor pour gérer la persistance du store
export const persistor = persistStore(store);
