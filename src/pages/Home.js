// Importa React e i componenti necessari
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Definisci il componente Home
function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Contenuto della home */}
      <div className="home-content">
        <h1>Benvenuto nella nostra homepage!</h1>
        <p>Qui troverai le ultime novità e le informazioni più importanti sul nostro sito.</p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Esporta il componente Home
export default Home;
