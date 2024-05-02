import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/artist">Artist</Link></li>
        {/* Aggiungi altri link qui per le altre pagine del sito */}
      </ul>
    </nav>
  );
}

export default Navbar;
