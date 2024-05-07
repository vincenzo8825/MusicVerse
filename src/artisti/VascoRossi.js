import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../css/cssartisti/vascoRossi.css';

function VascoRossi() {
  const [songTitle, setSongTitle] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [albums, setAlbums] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;

  const handleInputChange = (event) => {
    setSongTitle(event.target.value);
  };

  const searchLyrics = () => {
    axios.get(`https://api.lyrics.ovh/v1/Vasco%20Rossi/${songTitle}`)
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
      const response = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=Vasco%20Rossi&api_key=${apiKey}&format=json`);
      setAlbums(response.data?.topalbums?.album || []);
    } catch (error) {
      console.error('Si è verificato un errore nel recupero degli album:', error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, ); // Chiamata API degli album solo al caricamento iniziale

  return (
    <div className="vasco-container">
      <h2 className="vasco-title">Vasco Rossi</h2>
      <div className="vasco-info">
        <p>Vasco Rossi, conosciuto anche come Vasco o il Blasco, è un cantautore italiano. È uno dei più famosi e apprezzati artisti nella storia della musica italiana, con una carriera lunga e di grande successo.</p>
        <p>Qui puoi trovare informazioni sulla vita, la carriera e i successi di Vasco Rossi.</p>
      </div>
      <div className="vasco-search">
        <input type="text" value={songTitle} onChange={handleInputChange} placeholder="Titolo della canzone" />
        <button onClick={searchLyrics}>Cerca testo della canzone</button>
      </div>
      <div className="vasco-lyrics">
        <h3>Testo della canzone:</h3>
        <p>{lyrics}</p>
      </div>
      <div className="vasco-albums">
        <h3>Copertine degli album:</h3>
        <div>
          {albums.map(album => (
            <div key={album.name} className="vasco-album">
              <img src={album.image[2]['#text']} alt={album.name} />
              <p>{album.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VascoRossi;
