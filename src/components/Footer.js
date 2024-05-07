import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import './../css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3 className="footer-heading">MusicVerse</h3>
          <p className="footer-text">Explore the world of music with us:</p>
        </div>
        <div className="footer-right">
          <div className="footer-social">
            <FontAwesomeIcon icon={faFacebookF} className="footer-social-icon" />
            <FontAwesomeIcon icon={faTwitter} className="footer-social-icon" />
            <FontAwesomeIcon icon={faInstagram} className="footer-social-icon" />
          </div>
        </div>
      </div>
      <p className="footer-copyright">© 2024 MusicVerse. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
