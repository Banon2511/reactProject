import React from "react";
import MauritaniaMap from "./components/Mauritania"; // Assurez-vous que le chemin vers le fichier MauritaniaMap est correct
// import Sidebar from './components/Sidebar'; // Si Sidebar est nécessaire, décommentez cette ligne
import { MapContainer, TileLayer } from "react-leaflet"; // Ces imports sont inutilisés ici mais peuvent être supprimés si non nécessaires
import "leaflet/dist/leaflet.css"; // Important pour le style de la carte

function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Début du div principal */}

      {/* Affichage de la carte */}
      <MauritaniaMap />

      {/* 
      Si vous voulez utiliser un Sidebar plus tard, décommentez les lignes suivantes :
      
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        Contenu principal de l'application
        <h1>Bienvenue dans l'application</h1>
      </div>
      */}

      {/* Fin du div */}
    </div>
  );
}

export default App;
