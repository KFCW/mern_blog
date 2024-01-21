import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Importation du store Redux et du persistor depuis le fichier de configuration du store
import { store, persistor } from '../redux/store.js';

// Importation du composant Provider de react-redux pour donner accès au store Redux à l'application
import { Provider } from 'react-redux';

// Importation du composant PersistGate de redux-persist pour gérer la réhydration de l'état persistant
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  // Utilisation de PersistGate pour gérer la réhydration de l'état persistant
  <PersistGate persistor={persistor}>
    {/* Utilisation du composant Provider pour donner accès au store Redux à l'ensemble de l'application */}
    <Provider store={store}>
      {/* Rendu du composant principal de l'application (App) */}
      <App />
    </Provider>
  </PersistGate>
);
