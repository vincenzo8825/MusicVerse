import React from 'react';
import { Link } from 'react-router-dom';
import './../css/navbar.css'; // Assicurati di avere il percorso corretto al tuo file CSS

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">MusicVerse</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/artist">Artist</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/music">Music</Link>
            </li>
            {/* Aggiungi altri link qui per le altre pagine del sito */}
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
          {/* Aggiungi ulteriori elementi qui, ad esempio un pulsante di accesso */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
