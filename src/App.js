import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import ArtistPage from './pages/Artist';
import About from './pages/About';
import DavidBowie from './artisti/DavidBowie';
import MichaelJackson from './artisti/MichaelJackson';
import TheBeatles from './artisti/TheBeatles';
import BobDylan from './artisti/BobDylan';
import VascoRossi from './artisti/VascoRossi';
import FrankSinatra from './artisti/FrankSinatra';
import Queen from './artisti/Queen';
import ElvisPresley from './artisti/ElvisPresley';
import Madonna from './artisti/Madonna';
import Beyonce from './artisti/Beyonce';
import TheRollingStones from './artisti/TheRollingStones';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa i moduli JavaScript di Bootstrap

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artist" element={<ArtistPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/artisti/MichaelJackson" element={<MichaelJackson />} />
          <Route path="/artisti/TheBeatles" element={<TheBeatles />} />
          <Route path="/artisti/BobDylan" element={<BobDylan/>} />
          <Route path="/artisti/VascoRossi" element={<VascoRossi />} />
          <Route path="/artisti/Beyonce" element={<Beyonce/>} />
          <Route path="/artisti/DavidBowie" element={<DavidBowie />} />
          <Route path="/artisti/FrankSinatra" element={<FrankSinatra />} />
          <Route path="/artisti/Queen" element={<Queen />} />
          <Route path="/artisti/ElvisPresley" element={<ElvisPresley />} />
          <Route path="/artisti/Madonna" element={<Madonna />} />
          <Route path="/artisti/TheRollingStones" element={<TheRollingStones/>} /> 
          <Route path="/artisti/TheBeatles" element={<TheBeatles  />} />      
          {/* Aggiungi altri percorsi per le altre pagine del sito */}
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
