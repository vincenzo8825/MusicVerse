import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../css/cssartisti/queen.css';

function Queen() {
  const [songTitle, setSongTitle] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [albums, setAlbums] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;

  const handleInputChange = (event) => {
    setSongTitle(event.target.value);
  };

  const searchLyrics = () => {
    axios.get(`https://api.lyrics.ovh/v1/Queen/${songTitle}`)
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
      const response = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=Queen&api_key=${apiKey}&format=json`);
      setAlbums(response.data?.topalbums?.album || []);
    } catch (error) {
      console.error('Si è verificato un errore nel recupero degli album:', error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, ); // Chiamata API degli album solo al caricamento iniziale

  return (
    <div className="q-container">
      <h2 className="q-title">Queen</h2>
      <div className="q-info">
        <p>I Queen sono una delle band rock più iconiche e influenti della storia della musica. Conosciuti per le loro performance straordinarie, le composizioni epiche e il carisma sul palco, i Queen hanno avuto un impatto duraturo sulla cultura popolare.</p>
        <p>Con il leggendario frontman Freddie Mercury, i Queen hanno creato alcuni dei brani più amati e conosciuti della musica rock.</p>
        <p>Qui puoi trovare informazioni sulla vita, la carriera e i successi dei Queen.</p>
      </div>
      <div className="q-search">
        <input type="text" value={songTitle} onChange={handleInputChange} placeholder="Titolo della canzone" />
        <button onClick={searchLyrics}>Cerca testo della canzone</button>
      </div>
      <div className="q-lyrics">
        <h3>Testo della canzone:</h3>
        <p>{lyrics}</p>
      </div>
      <div className="q-albums">
        <h3>Copertine degli album:</h3>
        <div>
          {albums.map(album => (
            <div key={album.name} className="q-album">
              <img src={album.image[2]['#text']} alt={album.name} />
              <p>{album.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Queen;
