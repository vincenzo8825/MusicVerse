import React, { useState } from 'react';
import axios from 'axios';

function VascoRossi() {
  const [songTitle, setSongTitle] = useState('');
  const [lyrics, setLyrics] = useState('');

  const handleInputChange = (event) => {
    setSongTitle(event.target.value);
  };

  const searchLyrics = () => {
    axios.get(`https://api.lyrics.ovh/v1/Vasco Rossi/${songTitle}`)
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
      <h2>Vasco Rossi</h2>
      <div>
        <p>Vasco Rossi è un cantautore italiano, nato il 7 febbraio 1952 a Zocca, in provincia di Modena. Conosciuto anche come "Il Blasco", è uno dei più celebri artisti della musica italiana.</p>
        <p>Vasco ha scritto e interpretato numerosi successi, tra cui "Vita spericolata", "Albachiara" e "Siamo solo noi". Qui puoi cercare i testi delle sue canzoni e scoprire di più sulla sua carriera.</p>
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

export default VascoRossi;
