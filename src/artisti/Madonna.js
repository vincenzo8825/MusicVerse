import React, { useState } from 'react';
import axios from 'axios';

function Madonna() {
  const [songTitle, setSongTitle] = useState('');
  const [lyrics, setLyrics] = useState('');

  const handleInputChange = (event) => {
    setSongTitle(event.target.value);
  };

  const searchLyrics = () => {
    axios.get(`https://api.lyrics.ovh/v1/Madonna/${songTitle}`)
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
      <h2>Madonna</h2>
      <div>
        <p>Madonna Louise Ciccone, conosciuta semplicemente come Madonna, è una cantautrice, attrice, regista, ballerina e produttrice discografica statunitense. È una delle figure di maggior rilievo nel mondo della musica popolare contemporanea e una delle più influenti.</p>
        <p>Madonna è stata definita dalla rivista Rolling Stone la "donna più famosa e influente della musica popolare". Ha venduto oltre 300 milioni di dischi in tutto il mondo, diventando una delle artiste musicali di maggior successo commerciale della storia.</p>
        <p>Qui puoi trovare informazioni sulla vita, la carriera e i successi di Madonna.</p>
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

export default Madonna;
