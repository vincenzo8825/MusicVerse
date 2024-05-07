import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../css/cssartisti/bobDylan.css';

function BobDylan() {
  const [songTitle, setSongTitle] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [albums, setAlbums] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;

  const handleInputChange = (event) => {
    setSongTitle(event.target.value);
  };

  const searchLyrics = () => {
    axios.get(`https://api.lyrics.ovh/v1/Bob%20Dylan/${songTitle}`)
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
      const response = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=Bob%20Dylan&api_key=${apiKey}&format=json`);
      setAlbums(response.data?.topalbums?.album || []);
    } catch (error) {
      console.error('Si è verificato un errore nel recupero degli album:', error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, ); // Chiamata API degli album solo al caricamento iniziale

  return (
    <div className="bob-dylan-container">
      <h2 className="bob-dylan-title">Bob Dylan</h2>
      <div className="bob-dylan-info">
        <p>Bob Dylan (nato Robert Allen Zimmerman; 24 maggio 1941) è un cantautore, autore e artista visivo statunitense.</p>
        <p>È stato una figura di spicco nella cultura popolare durante una carriera che copre oltre 60 anni, durante i quali le sue canzoni hanno affrontato una serie di argomenti tra cui politica, questioni sociali e riflessioni personali.</p>
        <p>Qui puoi trovare informazioni sulla vita, la carriera e i successi di Bob Dylan.</p>
      </div>
      <div className="bob-dylan-search">
        <input type="text" value={songTitle} onChange={handleInputChange} placeholder="Titolo della canzone" />
        <button onClick={searchLyrics}>Cerca testo della canzone</button>
      </div>
      <div className="bob-dylan-lyrics">
        <h3>Testo della canzone:</h3>
        <p>{lyrics}</p>
      </div>
      <div className="bob-dylan-albums">
        <h3>Copertine degli album:</h3>
        <div>
          {albums.map(album => (
            <div key={album.name} className="bob-dylan-album">
              <img src={album.image[2]['#text']} alt={album.name} />
              <p>{album.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BobDylan;
