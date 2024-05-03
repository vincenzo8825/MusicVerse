import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './../css/home.css'; 

function Home() {
  return (
    <div>
      <Navbar />

      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1>Benvenuto su MusicVerse!</h1>
              <p>Esplora la tua passione per la musica attraverso un viaggio emozionante nel mondo dei generi, degli artisti e delle canzoni. Con MusicVerse, puoi scoprire la tua musica preferita, rimanere aggiornato sulle ultime novità e trovare nuovi talenti da ammirare.</p>
              <a href="/about" className="btn btn-primary">Scopri di più</a>
            </div>
            <div className="col-lg-6">
              <img src="/images/home-image.jpg" alt="Immagine di benvenuto" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="featured-artists-section">
        <div className="container">
          <h2 className="section-title">Artisti in primo piano</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="/images/artist1.jpg" className="card-img-top" alt="Artista 1" />
                <div className="card-body">
                  <h5 className="card-title">Artista 1</h5>
                  <p className="card-text">Una breve descrizione dell'artista.</p>
                </div>
              </div>
            </div>
            {/* Aggiungi più card degli artisti qui */}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Unisciti a noi e scopri il mondo della musica!</h2>
          <a href="/signup" className="btn btn-lg btn-primary">Iscriviti ora</a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
