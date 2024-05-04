import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
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
              <Link to="/about" className="btn btn-primary">Scopri di più</Link>
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
          <div id="artist-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                      <img src="/images/madonna.jpg" className="card-img-top" alt="Madonna" />
                      <div className="card-body">
                        <h5 className="card-title">Madonna</h5>
                        <Link to="/artisti/Madonna" className="btn btn-primary">Scopri di più</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <img src="/images/vasco-rossi.jpg" className="card-img-top" alt="Vasco Rossi" />
                      <div className="card-body">
                        <h5 className="card-title">Vasco Rossi</h5>
                        <Link to="/artisti/VascoRossi" className="btn btn-primary">Scopri di più</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <img src="/images/david-bowie.jpg" className="card-img-top" alt="David Bowie" />
                      <div className="card-body">
                        <h5 className="card-title">David Bowie</h5>
                        <Link to="/artisti/DavidBowie" className="btn btn-primary">Scopri di più</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                      <img src="/images/beyonce.jpg" className="card-img-top" alt="Beyoncé" />
                      <div className="card-body">
                        <h5 className="card-title">Beyoncé</h5>
                        <Link to="/artisti/Beyonce" className="btn btn-primary">Scopri di più</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <img src="/images/elvis-presley.jpg" className="card-img-top" alt="Elvis Presley" />
                      <div className="card-body">
                        <h5 className="card-title">Elvis Presley</h5>
                        <Link to="/artisti/ElvisPresley" className="btn btn-primary">Scopri di più</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <img src="/images/frank-sinatra.jpg" className="card-img-top" alt="Frank Sinatra" />
                      <div className="card-body">
                        <h5 className="card-title">Frank Sinatra</h5>
                        <Link to="/artisti/FrankSinatra" className="btn btn-primary">Scopri di più</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#artist-carousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#artist-carousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
