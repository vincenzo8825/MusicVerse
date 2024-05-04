import React, { useState } from 'react';
import axios from 'axios';

function Queen() {
  const [songTitle, setSongTitle] = useState('');
  const [lyrics, setLyrics] = useState('');

  const handleInputChange = (event) => {
    setSongTitle(event.target.value);
  };

  const searchLyrics = () => {
    axios.get(`https://api.lyrics.ovh/v1/Queen/${songTitle}`)
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
      <h2>Queen</h2>
      <div>
        <p>I Queen sono stati un gruppo musicale rock britannico, fondato nel 1970 a Londra dal cantante Freddie Mercury, dal chitarrista Brian May e dal batterista Roger Taylor, con John Deacon al basso.</p>
        <p>I Queen sono considerati uno dei gruppi musicali di maggior successo nella storia della musica rock. La loro musica è caratterizzata da una varietà di stili, che vanno dal rock progressivo al heavy metal, dal pop al rock sinfonico.</p>
        <p>Qui puoi trovare informazioni sulla vita, la carriera e i successi dei Queen.</p>
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

export default Queen;
