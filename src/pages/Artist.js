import React from 'react';
import { Link } from 'react-router-dom';
import './../css/artist.css';

function Artist() {
  // Dati degli artisti
  const artists = [
    { id: 1, name: 'Michael Jackson', songs: ['Thriller', 'Billie Jean', 'Beat It'] },
    { id: 2, name: 'The Beatles', songs: ['Hey Jude', 'Let It Be', 'Yesterday'] },
    { id: 3, name: 'Elvis Presley', songs: ['Hound Dog', 'Love Me Tender', 'Can\'t Help Falling in Love'] },
    { id: 4, name: 'Madonna', songs: ['Like a Prayer', 'Material Girl', 'Vogue'] },
    { id: 5, name: 'Bob Dylan', songs: ['Blowin\' in the Wind', 'Like a Rolling Stone', 'Knockin\' on Heaven\'s Door'] },
    { id: 6, name: 'Queen', songs: ['Bohemian Rhapsody', 'We Will Rock You', 'Another One Bites the Dust'] },
    { id: 7, name: 'Frank Sinatra', songs: ['My Way', 'Fly Me to the Moon', 'New York, New York'] },
    { id: 8, name: 'Beyonce', songs: ['Single Ladies (Put a Ring on It)', 'Crazy in Love', 'Halo'] },
    { id: 9, name: 'The Rolling Stones', songs: ['Paint It Black', 'Satisfaction', 'Angie'] },
    { id: 10, name: 'David Bowie', songs: ['Space Oddity', 'Heroes', 'Let\'s Dance'] },
    { id: 11, name: 'Vasco Rossi', songs: ['Vita Spericolata', 'Vivere', 'Albachiara'] },
  ];

  return (
    <div className="artist-page">
      <div className="container">
      <Link to="/" className="back-to-home">Torna alla Home</Link>
        <h2 className="artist-title mb-4">Artist Page</h2>
        <div className="row">
          {artists.map((artist) => (
            <div key={artist.id} className="col-md-4 mb-4">
              <div className="artist-card card">
                <div className="card-body">
                  <h3 className="card-title">{artist.name}</h3>
                  <ul className="list-group list-group-flush">
                    {artist.songs.map((song, index) => (
                      <li key={index} className="list-group-item">{song}</li>
                    ))}
                  </ul>
                  {/* Pulsante dedicato per ciascun artista */}
                  <Link to={`/artisti/${artist.name.replace(/\s+/g, '')}`} className="btn btn-primary mt-3">Vai a {artist.name}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Artist;
