import React, { useState } from 'react';
import axios from 'axios';

function TheBeatles() {
  const [songTitle, setSongTitle] = useState('');
  const [lyrics, setLyrics] = useState('');

  const handleInputChange = (event) => {
    setSongTitle(event.target.value);
  };

  const searchLyrics = () => {
    axios.get(`https://api.lyrics.ovh/v1/The%20Beatles/${songTitle}`)
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
      <h2>The Beatles</h2>
      <div>
        <p>The Beatles were an English rock band formed in Liverpool in 1960. With a line-up comprising John Lennon, Paul McCartney, George Harrison, and Ringo Starr, they are regarded as one of the most influential bands of all time.</p>
        <p>Their music was characterized by experimentation, innovation, and cultural impact, and their contributions to music and popular culture continue to be celebrated.</p>
        <p>Here you can find information about The Beatles' music, albums, and more.</p>
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

export default TheBeatles;
