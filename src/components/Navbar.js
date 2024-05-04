import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './../css/navbar.css';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Aggiungi uno stato per il messaggio di errore
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const artists = ['Michael Jackson', 'The Beatles', 'Bob Dylan', 'Vasco Rossi', 'Beyoncé', 'David Bowie', 'Frank Sinatra', 'Queen', 'Elvis Presley', 'Madonna'];
    const foundArtist = artists.find(artist => artist.toLowerCase() === searchQuery.toLowerCase());
    if (foundArtist) {
      navigate(`/artisti/${foundArtist.replace(/\s+/g, '')}`);
      setErrorMessage(''); // Resetta il messaggio di errore se l'artista è stato trovato
    } else {
      setErrorMessage('Artista non trovato. Si prega di inserire un altro nome.');
    }
  };

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
          </ul>
          <form className="d-flex" onSubmit={handleSearch}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
          {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>} {/* Mostra il messaggio di errore se presente */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
