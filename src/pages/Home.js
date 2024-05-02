// Importa React e i componenti necessari
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './../css/home.css'; // Importa il file CSS

// Definisci il componente Home
function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Contenuto della home */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1>Benvenuto su MusicVerse!</h1>
              <p>Scopri la tua passione per la musica esplorando il vasto mondo dei generi, artisti e canzoni. Con MusicVerse, puoi trovare la tua musica preferita, leggere le ultime notizie e scoprire nuovi artisti.</p>
              <a href="/about" className="btn btn-primary">Scopri di più</a>
            </div>
            <div className="col-lg-6">
              <img src="/images/home-image.jpg" alt="Immagine di benvenuto" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured artists section */}
      <section className="featured-artists-section">
        <div className="container">
          <h2 className="section-title">Artisti in primo piano</h2>
          <div className="row">
            {/* Elenca qui alcuni artisti in primo piano */}
            <div className="col-md-4">
              <div className="card">
                <img src="/images/artist1.jpg" className="card-img-top" alt="Artista 1" />
                <div className="card-body">
                  <h5 className="card-title">Artista 1</h5>
                  <p className="card-text">Descrizione breve dell'artista.</p>
                </div>
              </div>
            </div>
            {/* Aggiungi più card degli artisti qui */}
          </div>
        </div>
      </section>

      {/* Call to action section */}
      <section className="cta-section">
        <div className="container">
          <h2>Unisciti a noi e scopri il mondo della musica!</h2>
          <a href="/signup" className="btn btn-lg btn-primary">Iscriviti ora</a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Esporta il componente Home
export default Home;
