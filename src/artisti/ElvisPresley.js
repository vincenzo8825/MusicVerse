import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../css/cssartisti/elvisPresley.css';

function ElvisPresley() {
  const [songTitle, setSongTitle] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [albums, setAlbums] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;

  const handleInputChange = (event) => {
    setSongTitle(event.target.value);
  };

  const searchLyrics = () => {
    axios.get(`https://api.lyrics.ovh/v1/Elvis%20Presley/${songTitle}`)
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
      const response = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=Elvis%20Presley&api_key=${apiKey}&format=json`);
      setAlbums(response.data?.topalbums?.album || []);
    } catch (error) {
      console.error('Si è verificato un errore nel recupero degli album:', error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, ); // Chiamata API degli album solo al caricamento iniziale

  return (
    <div className="elvis-presley-container">
      <h2 className="elvis-presley-title">Elvis Presley</h2>
      <div className="elvis-presley-info">
        <p>Elvis Presley, soprannominato anche "Re del Rock and Roll", è stato un cantante e attore statunitense. È considerato uno dei più grandi e influenti artisti nella storia della musica popolare del XX secolo.</p>
        <p>Conosciuto per la sua voce potente, il suo stile unico e la sua presenza scenica carismatica, Elvis ha avuto un impatto duraturo sulla cultura popolare.</p>
        <p>Qui puoi trovare informazioni sulla vita, la carriera e i successi di Elvis Presley.</p>
      </div>
      <div className="elvis-presley-search">
        <input type="text" value={songTitle} onChange={handleInputChange} placeholder="Titolo della canzone" />
        <button onClick={searchLyrics}>Cerca testo della canzone</button>
      </div>
      <div className="elvis-presley-lyrics">
        <h3>Testo della canzone:</h3>
        <p>{lyrics}</p>
      </div>
      <div className="elvis-presley-albums">
        <h3>Copertine degli album:</h3>
        <div>
          {albums.map(album => (
            <div key={album.name} className="elvis-presley-album">
              <img src={album.image[2]['#text']} alt={album.name} />
              <p>{album.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ElvisPresley;
