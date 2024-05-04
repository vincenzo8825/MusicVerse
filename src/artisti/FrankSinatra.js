import React, { useState } from 'react';
import axios from 'axios';

function FrankSinatra() {
  const [songTitle, setSongTitle] = useState('');
  const [lyrics, setLyrics] = useState('');

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

  return (
    <div>
      <h2>Frank Sinatra</h2>
      <div>
        <p>Frank Sinatra (December 12, 1915 – May 14, 1998) was an American singer, actor, and producer who was one of the most popular and influential musical artists of the 20th century.</p>
        <p>Sinatra is one of the best-selling music artists of all time, having sold more than 150 million records worldwide.</p>
        <p>Here you can find information about Frank Sinatra's life, career, and achievements.</p>
      </div>
      <div>
        <input type="text" value={songTitle} onChange={handleInputChange} placeholder="Titolo della canzone" />
        <button onClick={searchLyrics}>Cerca testo della canzone</button>
        <div>
          <h3>Testo della canzone:</h3>
          <p>{lyrics}</p>
        </div>
      </div>
    </div>
  );
}

export default FrankSinatra;
