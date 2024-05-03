import React, { useState } from 'react';
import axios from 'axios';

function MichaelJackson() {
  const [songTitle, setSongTitle] = useState('');
  const [lyrics, setLyrics] = useState('');

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

  return (
    <div>
      <h2>Michael Jackson</h2>
      <div>
        <p>Michael Joseph Jackson (August 29, 1958 – June 25, 2009) was an American singer, songwriter, and dancer. Dubbed the "King of Pop", he is regarded as one of the most significant cultural figures of the 20th century and one of the greatest entertainers.</p>
        <p>His contributions to music, dance, and fashion, along with his publicized personal life, made him a global figure in popular culture for over four decades.</p>
        <p>Here you can find information about Michael Jackson's life, career, and achievements.</p>
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

export default MichaelJackson;
