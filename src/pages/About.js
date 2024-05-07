import React from 'react';
import './../css/about.css'; // Assicurati di avere un file CSS dedicato per lo stile della pagina About

function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">Chi Siamo</h2>
      <div className="about-content">
        <p>Benvenuti su Music Verse, il tuo portale per esplorare il mondo della musica. Siamo appassionati di tutto ciò che riguarda la musica, dalle sue radici storiche alle ultime tendenze. Il nostro obiettivo è fornire ai nostri visitatori un'esperienza coinvolgente e informativa, offrendo articoli, recensioni, notizie e molto altro ancora.</p>
        <p>Ci impegniamo a fornire contenuti accurati e di qualità su una vasta gamma di generi musicali e artisti. Che tu sia un appassionato di rock, hip-hop, jazz, pop o qualsiasi altro genere, troverai qualcosa per te su Music Verse.</p>
        <p>Al momento, il nostro sito offre una gamma limitata di contenuti e funzionalità. Tuttavia, stiamo lavorando duramente per implementare nuovi artisti, nuove categorie e nuove funzionalità per arricchire ulteriormente l'esperienza dei nostri utenti. Resta aggiornato per le prossime novità!</p>
        <a href="/" className="back-to-home">Torna alla Homepage</a>
      </div>
    </div>
  );
}

export default About;
