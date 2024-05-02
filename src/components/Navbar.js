import React from 'react';
import { Link } from 'react-router-dom';
import'./../css/navbar.css';
function Navbar() {
  return (
    <nav>
<h2>Navbar</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/artist">Artist</Link></li>
        <li><Link to="/music">Music</Link></li>
        {/* Aggiungi altri link qui per le altre pagine del sito */}
      </ul>
    </nav>
    
);
}

export default Navbar;
