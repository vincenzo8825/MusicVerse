import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../css/cssartisti/theBeatles.css';

function TheBeatles() {
  const [songTitle, setSongTitle] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [albums, setAlbums] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;

  const handleInputChange = (event) => {
    setSongTitle(event.target.value);
  };

  const searchLyrics = () => {
    axios.get(`https://api.lyrics.ovh/v1/The%20Beatles/${songTitle}`)
      .then(response => {
        setLyrics(response.data.lyrics || "Testo non trovato");
      })
      .catch(error => {
        console.error('Si è verificato un errore:', error);
        setLyrics("Si è verificato un errore durante il recupero del testo della canzone.");
      });
  };

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=The%20Beatles&api_key=${apiKey}&format=json`);
      setAlbums(response.data?.topalbums?.album || []);
    } catch (error) {
      console.error('Si è verificato un errore nel recupero degli album:', error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, ); // Chiamata API degli album solo al caricamento iniziale

  return (
    <div className="beatles-container">
      <h2 className="beatles-title">The Beatles</h2>
      <div className="beatles-info">
        <p>I The Beatles sono una delle band più influenti e acclamate nella storia della musica popolare. Conosciuti per le loro melodie orecchiabili, le armonie vocali e la sperimentazione musicale, i Beatles hanno cambiato il volto della musica negli anni '60.</p>
        <p>Con membri come John Lennon, Paul McCartney, George Harrison e Ringo Starr, i Beatles hanno creato una vasta discografia di brani iconici che continuano ad essere amati da generazioni di fan.</p>
        <p>Qui puoi trovare informazioni sulla vita, la carriera e i successi dei Beatles.</p>
      </div>
      <div className="beatles-search">
        <input type="text" value={songTitle} onChange={handleInputChange} placeholder="Titolo della canzone" />
        <button onClick={searchLyrics}>Cerca testo della canzone</button>
      </div>
      <div className="beatles-lyrics">
        <h3>Testo della canzone:</h3>
        <p>{lyrics}</p>
      </div>
      <div className="beatles-albums">
        <h3>Copertine degli album:</h3>
        <div>
          {albums.map(album => (
            <div key={album.name} className="beatles-album">
              <img src={album.image[2]['#text']} alt={album.name} />
              <p>{album.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TheBeatles;
