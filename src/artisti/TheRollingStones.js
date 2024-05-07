import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../css/cssartisti/theRollingStone.css';
function TheRollingStones() {
  const [songTitle, setSongTitle] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [albums, setAlbums] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;

  const handleInputChange = (event) => {
    setSongTitle(event.target.value);
  };

  const searchLyrics = () => {
    axios.get(`https://api.lyrics.ovh/v1/The%20Rolling%20Stones/${songTitle}`)
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
      const response = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=The%20Rolling%20Stones&api_key=${apiKey}&format=json`);
      setAlbums(response.data?.topalbums?.album || []);
    } catch (error) {
      console.error('Si è verificato un errore nel recupero degli album:', error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, ); // Chiamata API degli album solo al caricamento iniziale

  return (
    <div className="rollingstones-container">
      <h2 className="rollingstones-title">The Rolling Stones</h2>
      <div className="rollingstones-info">
        <p>I The Rolling Stones sono una delle band rock più famose e durature della storia della musica. Conosciuti per la loro energia elettrica sul palco, le canzoni orecchiabili e lo stile ribelle, i Rolling Stones hanno lasciato un'impronta indelebile sulla cultura popolare.</p>
        <p>Con membri come Mick Jagger, Keith Richards, Charlie Watts e Ronnie Wood, i Rolling Stones hanno sfornato una serie di hit che hanno ridefinito il suono del rock 'n' roll.</p>
        <p>Qui puoi trovare informazioni sulla vita, la carriera e i successi dei Rolling Stones.</p>
      </div>
      <div className="rollingstones-search">
        <input type="text" value={songTitle} onChange={handleInputChange} placeholder="Titolo della canzone" />
        <button onClick={searchLyrics}>Cerca testo della canzone</button>
      </div>
      <div className="rollingstones-lyrics">
        <h3>Testo della canzone:</h3>
        <p>{lyrics}</p>
      </div>
      <div className="rollingstones-albums">
        <h3>Copertine degli album:</h3>
        <div>
          {albums.map(album => (
            <div key={album.name} className="rollingstones-album">
              <img src={album.image[2]['#text']} alt={album.name} />
              <p>{album.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TheRollingStones;
