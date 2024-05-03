import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import ArtistPage from './pages/Artist';

import MichaelJackson from './artisti/MichaelJackson';
import TheBeatles from './artisti/TheBeatles';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa i moduli JavaScript di Bootstrap

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artist" element={<ArtistPage />} />
          
          <Route path="/artisti/MichaelJackson" element={<MichaelJackson />} />
          <Route path="/artisti/TheBeatles" element={<TheBeatles />} />

          {/* Aggiungi altri percorsi per le altre pagine del sito */}
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
