import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import ArtistPage from './pages/Artist';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artist" element={<ArtistPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Aggiungi altri percorsi per le altre pagine del sito */}
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
