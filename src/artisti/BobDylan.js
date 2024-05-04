import React, { useState } from 'react';
import axios from 'axios';

function BobDylan() {
  const [songTitle, setSongTitle] = useState('');
  const [lyrics, setLyrics] = useState('');

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

  return (
    <div>
      <h2>Bob Dylan</h2>
      <div>
        <p>Bob Dylan (born Robert Allen Zimmerman; May 24, 1941) is an American singer-songwriter, author, and visual artist.</p>
        <p>He has been a major figure in popular culture during a career spanning over 60 years, during which time his songwriting has covered a range of topics including politics, social issues, and personal reflections.</p>
        <p>Here you can find information about Bob Dylan's life, career, and achievements.</p>
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

export default BobDylan;
