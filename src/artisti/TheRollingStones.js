import React, { useState } from 'react';
import axios from 'axios';

function RollingStones() {
  const [songTitle, setSongTitle] = useState('');
  const [lyrics, setLyrics] = useState('');

  const handleInputChange = (event) => {
    setSongTitle(event.target.value);
  };

  const searchLyrics = () => {
    axios.get(`https://api.lyrics.ovh/v1/The Rolling Stones/${songTitle}`)
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
      <h2>The Rolling Stones</h2>
      <div>
        <p>I The Rolling Stones sono un gruppo musicale rock britannico, formatosi a Londra nel 1962. Sono considerati uno dei più grandi e famosi gruppi rock di tutti i tempi.</p>
        <p>I Rolling Stones sono noti per brani iconici come "Satisfaction", "Paint It Black" e "Angie". Qui puoi trovare informazioni sulla loro carriera, discografia e molto altro ancora.</p>
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

export default RollingStones;
