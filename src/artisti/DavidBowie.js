import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../css/cssartisti/davidBowie.css';

function DavidBowie() {
  const [songTitle, setSongTitle] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [albums, setAlbums] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;

  const handleInputChange = (event) => {
    setSongTitle(event.target.value);
  };

  const searchLyrics = () => {
    axios.get(`https://api.lyrics.ovh/v1/David%20Bowie/${songTitle}`)
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
      const response = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=David%20Bowie&api_key=${apiKey}&format=json`);
      setAlbums(response.data?.topalbums?.album || []);
    } catch (error) {
      console.error('Si è verificato un errore nel recupero degli album:', error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, ); // Chiamata API degli album solo al caricamento iniziale

  return (
    <div className="david-bowie-container">
      <h2 className="david-bowie-title">David Bowie</h2>
      <div className="david-bowie-info">
        <p>David Bowie è stato un cantautore e attore britannico, una delle figure più influenti nella musica pop e nel mondo dell'intrattenimento.</p>
        <p>Conosciuto per la sua musica innovativa, la sua immagine iconica e la sua versatilità artistica, Bowie ha avuto un impatto duraturo sulla cultura popolare.</p>
        <p>Qui puoi trovare informazioni sulla vita, la carriera e i successi di David Bowie.</p>
      </div>
      <div className="david-bowie-search">
        <input type="text" value={songTitle} onChange={handleInputChange} placeholder="Titolo della canzone" />
        <button onClick={searchLyrics}>Cerca testo della canzone</button>
      </div>
      <div className="david-bowie-lyrics">
        <h3>Testo della canzone:</h3>
        <p>{lyrics}</p>
      </div>
      <div className="david-bowie-albums">
        <h3>Copertine degli album:</h3>
        <div>
          {albums.map(album => (
            <div key={album.name} className="david-bowie-album">
              <img src={album.image[2]['#text']} alt={album.name} />
              <p>{album.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DavidBowie;
