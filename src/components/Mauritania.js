import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import mauritaniaGeoJSON from "./Mauritania.json"; // Assurez-vous que le chemin est correct

const MauritaniaMap = () => {
  const [hoveredRegion, setHoveredRegion] = useState(null);

  // Style de base pour les contours de la Mauritanie
  const countryStyle = {
    fillColor: "blue",
    color: "black",
    weight: 2,
    fillOpacity: 0.3,
    pointerEvents: "visiblePainted", // Rend les bords plus tolérants
  };
  

  // Style au survol
  const hoverStyle = {
    fillColor: "green", // Change la couleur au survol
    fillOpacity: 0.6, // Augmente l'opacité au survol
  };

  // Fonction pour appliquer le style conditionnel
  const onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: (e) => {
        e.target.setStyle(hoverStyle); // Applique le style hover
        setHoveredRegion(feature.properties.name || "Zone inconnue");
      },
      mouseout: (e) => {
        e.target.setStyle(countryStyle); // Réinitialise le style
        setHoveredRegion(null);
      },
    });
  };

  return (
    <MapContainer
      center={[20.254, -10.591]} // Centré sur la Mauritanie
      zoom={6} // Niveau de zoom pour bien voir le pays
      style={{ height: "500px", width: "100%" }} // Dimensions de la carte
    >
      {/* Couche de tuiles OpenStreetMap */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Affichage des contours de la Mauritanie avec interactions */}
      <GeoJSON
        data={mauritaniaGeoJSON}
        style={countryStyle} // Style par défaut
        onEachFeature={onEachFeature} // Ajout des événements de survol
      >
        {/* Affiche un Tooltip pour chaque région */}
        {mauritaniaGeoJSON.features.map((feature, index) => (
          <Tooltip key={index} direction="center" permanent={false}>
            {feature.properties.name || "Zone inconnue"}
          </Tooltip>
        ))}
      </GeoJSON>
    </MapContainer>
  );
};
export default MauritaniaMap;