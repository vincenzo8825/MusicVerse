import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../css/cssartisti/michealJackson.css';

function MichaelJackson() {
  const [songTitle, setSongTitle] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [albums, setAlbums] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;

  const handleInputChange = (event) => {
    setSongTitle(event.target.value);
  };

  const searchLyrics = () => {
    axios.get(`https://api.lyrics.ovh/v1/Michael%20Jackson/${songTitle}`)
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
      const response = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=Michael%20Jackson&api_key=${apiKey}&format=json`);
      setAlbums(response.data?.topalbums?.album || []);
    } catch (error) {
      console.error('Si è verificato un errore nel recupero degli album:', error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, ); // Chiamata API degli album solo al caricamento iniziale

  return (
    <div className="mj-container">
      <h2 className="mj-title">Michael Jackson</h2>
      <div className="mj-info">
        <p>Michael Jackson è stato un cantante, compositore e ballerino statunitense. Conosciuto come il "Re del Pop", Jackson è considerato uno dei più grandi e influenti artisti della musica popolare.</p>
        <p>Con una carriera che ha attraversato cinque decenni, Jackson ha lasciato un'impronta indelebile sulla cultura popolare con le sue performance straordinarie, la sua musica innovativa e il suo impatto sociale.</p>
        <p>Qui puoi trovare informazioni sulla vita, la carriera e i successi di Michael Jackson.</p>
      </div>
      <div className="mj-search">
        <input type="text" value={songTitle} onChange={handleInputChange} placeholder="Titolo della canzone" />
        <button onClick={searchLyrics}>Cerca testo della canzone</button>
      </div>
      <div className="mj-lyrics">
        <h3>Testo della canzone:</h3>
        <p>{lyrics}</p>
      </div>
      <div className="mj-albums">
        <h3>Copertine degli album:</h3>
        <div>
          {albums.map(album => (
            <div key={album.name} className="mj-album">
              <img src={album.image[2]['#text']} alt={album.name} />
              <p>{album.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MichaelJackson;
