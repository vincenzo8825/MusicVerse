import React, { useState } from 'react';
import axios from 'axios';

function Beyonce() {
  const [songTitle, setSongTitle] = useState('');
  const [lyrics, setLyrics] = useState('');

  const handleInputChange = (event) => {
    setSongTitle(event.target.value);
  };

  const searchLyrics = () => {
    axios.get(`https://api.lyrics.ovh/v1/Beyonce/${songTitle}`)
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
      <h2>Beyoncé</h2>
      <div>
        <p>Beyoncé è una cantante, compositrice e attrice statunitense, nota per la sua influenza nella musica e nella cultura pop. Ha venduto milioni di dischi in tutto il mondo e ha ricevuto numerosi premi e riconoscimenti.</p>
        <p>Qui puoi trovare informazioni sulla vita, la carriera e i successi di Beyoncé.</p>
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

export default Beyonce;
