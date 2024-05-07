import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './../css/home.css';
import './../css/Footer.css';

function Home() {
  const [topArtists, setTopArtists] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const [similarArtists, setSimilarArtists] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchTopArtists = async () => {
      try {
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${apiKey}&format=json&limit=10`);
        if (!response.ok) {
          throw new Error('Errore nella richiesta HTTP: ' + response.status);
        }
        const data = await response.json();
        setTopArtists(data?.artists?.artist || []);
      } catch (error) {
        console.error('Errore nel recupero dei top artisti:', error);
      }
    };

    const fetchTopTracks = async () => {
      try {
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${apiKey}&format=json&limit=10`);
        if (!response.ok) {
          throw new Error('Errore nella richiesta HTTP: ' + response.status);
        }
        const data = await response.json();
        setTopTracks(data?.tracks?.track || []);
      } catch (error) {
        console.error('Errore nel recupero delle top tracce:', error);
      }
    };

    const fetchSimilarArtists = async () => {
      try {
        const artistName = 'Ed Sheeran';
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${encodeURIComponent(artistName)}&api_key=${apiKey}&format=json&limit=5`);
        if (!response.ok) {
          throw new Error('Errore nella richiesta HTTP: ' + response.status);
        }
        const data = await response.json();
        setSimilarArtists(data?.similarartists?.artist || []);
      } catch (error) {
        console.error('Errore nel recupero degli artisti simili:', error);
      }
    };

    fetchTopArtists();
    fetchTopTracks();
    fetchSimilarArtists();
  }, [apiKey]);

  

  return (
    <div>
      <Navbar />

      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h1 className="display-4 mb-4">Benvenuto su MusicVerse!</h1>
              <p className="lead">Esplora la tua passione per la musica e scopri le parole che ti hanno emozionato, ispirato e accompagnato nei momenti più importanti della tua vita.</p>
              
              {/* Aggiunto l'ancoraggio al pulsante "Scopri di più" */}
              <a href="#top-artist-section" className="btn btn-primary btn-lg">Scopri di più</a>
            </div>
          </div>
        </div>
      </section>

      <section id="top-artist-section" className="top-artists-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Top Artisti</h2>
          <div className="row">
            {topArtists.map(artist => (
              <div key={artist.name} className="col-md-4 mb-4">
                <div className="card h-100">
                  
                  <div className="card-body">
                    <h5 className="card-title">{artist.name}</h5>
                    <p className="card-text">Ascolti totali: {artist.playcount}</p>
                    {artist.url && (
                      <a href={artist.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">Vai su Last.fm</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="top-tracks-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Top Tracce</h2>
          <div className="row">
            {topTracks.map(track => (
              <div key={track.name} className="col-md-4 mb-4">
                <div className="card h-100">
                  
                  <div className="card-body">
                    <h5 className="card-title">{track.name}</h5>
                    <p className="card-text">Artista: {track.artist.name}</p>
                    <p className="card-text">Ascolti totali: {track.playcount}</p>
                    <p className="card-text">Durata: {formatDuration(track.duration)}</p>
                    {track.url && (
                      <a href={track.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">Ascolta su Last.fm</a>
                    )}
                    {track.toptags && (
                      <p className="card-text">Tag: {track.toptags.tag.map(tag => tag.name).join(', ')}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

   

      <section className="similar-artists-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Artisti Simili a Ed Sheeran</h2>
          <div className="row">
            {similarArtists.map(artist => (
              <div key={artist.name} className="col-md-4 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{artist.name}</h5>
                    {artist.url && (
                      <a href={artist.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">Visualizza su Last.fm</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function formatDuration(duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

export default Home;
