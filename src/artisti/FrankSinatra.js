import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../css/cssartisti/frankSinatra.css';

function FrankSinatra() {
  const [songTitle, setSongTitle] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [albums, setAlbums] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;

  const handleInputChange = (event) => {
    setSongTitle(event.target.value);
  };

  const searchLyrics = () => {
    axios.get(`https://api.lyrics.ovh/v1/Frank%20Sinatra/${songTitle}`)
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
      const response = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=Frank%20Sinatra&api_key=${apiKey}&format=json`);
      setAlbums(response.data?.topalbums?.album || []);
    } catch (error) {
      console.error('Si è verificato un errore nel recupero degli album:', error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  },); // Chiamata API degli album solo al caricamento iniziale

  return (
    <div className="frank-sinatra-container">
      <h2 className="frank-sinatra-title">Frank Sinatra</h2>
      <div className="frank-sinatra-info">
        <p>Frank Sinatra è stato un cantante, attore e produttore discografico statunitense. È considerato uno dei più grandi interpreti della musica americana del XX secolo, con una carriera che ha spaziato dal jazz al pop e al cinema.</p>
        <p>Soprannominato "La Voce" e "Ol' Blue Eyes", Sinatra è famoso per le sue performance impeccabili, la sua voce vellutata e il suo carisma sul palco.</p>
        <p>Qui puoi trovare informazioni sulla vita, la carriera e i successi di Frank Sinatra.</p>
      </div>
      <div className="frank-sinatra-search">
        <input type="text" value={songTitle} onChange={handleInputChange} placeholder="Titolo della canzone" />
        <button onClick={searchLyrics}>Cerca testo della canzone</button>
      </div>
      <div className="frank-sinatra-lyrics">
        <h3>Testo della canzone:</h3>
        <p>{lyrics}</p>
      </div>
      <div className="frank-sinatra-albums">
        <h3>Copertine degli album:</h3>
        <div>
          {albums.map(album => (
            <div key={album.name} className="frank-sinatra-album">
              <img src={album.image[2]['#text']} alt={album.name} />
              <p>{album.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FrankSinatra;
