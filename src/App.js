import React from 'react';
import Sidebar from './Sidebar'; // Assurez-vous que le chemin correspond

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        {/* Contenu principal de l'application */}
        <h1>Bienvenue dans l'application</h1>
      </div>
    </div>
  );
}

export default App;
