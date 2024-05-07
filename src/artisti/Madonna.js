import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../css/cssartisti/madonna.css';

function Madonna() {
  const [songTitle, setSongTitle] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [albums, setAlbums] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;

  const handleInputChange = (event) => {
    setSongTitle(event.target.value);
  };

  const searchLyrics = () => {
    axios.get(`https://api.lyrics.ovh/v1/Madonna/${songTitle}`)
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
      const response = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=Madonna&api_key=${apiKey}&format=json`);
      setAlbums(response.data?.topalbums?.album || []);
    } catch (error) {
      console.error('Si è verificato un errore nel recupero degli album:', error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, ); // Chiamata API degli album solo al caricamento iniziale

  return (
    <div className="madonna-container">
      <h2 className="madonna-title">Madonna</h2>
      <div className="madonna-info">
        <p>Madonna è una cantautrice, attrice e imprenditrice statunitense. Conosciuta come "La Regina del Pop", Madonna ha avuto un'impatto significativo sulla musica popolare e la cultura mainstream sin dagli anni '80.</p>
        <p>Con la sua combinazione di talento, provocazione e innovazione, Madonna ha influenzato generazioni di artisti e ha contribuito a ridefinire i ruoli di genere nella musica e nell'intrattenimento.</p>
        <p>Qui puoi trovare informazioni sulla vita, la carriera e i successi di Madonna.</p>
      </div>
      <div className="madonna-search">
        <input type="text" value={songTitle} onChange={handleInputChange} placeholder="Titolo della canzone" />
        <button onClick={searchLyrics}>Cerca testo della canzone</button>
      </div>
      <div className="madonna-lyrics">
        <h3>Testo della canzone:</h3>
        <p>{lyrics}</p>
      </div>
      <div className="madonna-albums">
        <h3>Copertine degli album:</h3>
        <div>
          {albums.map(album => (
            <div key={album.name} className="madonna-album">
              <img src={album.image[2]['#text']} alt={album.name} />
              <p>{album.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Madonna;
