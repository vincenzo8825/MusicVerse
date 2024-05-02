// Importa React e i componenti necessari
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './../css/home.css'; // Importa il file CSS

// Definisci il componente Home
function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Contenuto della home */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Benvenuto nella nostra homepage!</h1>
            <p>Qui troverai le ultime novità e le informazioni più importanti sul nostro sito.</p>
            <button className="btn btn-primary">Pulsante Bootstrap</button>
          </div>
          
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Esporta il componente Home
export default Home;
