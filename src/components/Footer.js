import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              KG
            </Link>
          </div>
          <small className='website-rights'>KG © 2022</small>
          <div className='social-icons'>
            <a className='social-icon-link github' href='https://github.com/gonzk' target='_blank'>
              <i className='fab fa-github'/></a>
            <a href='https://www.linkedin.com/in/gonzaleskr/' target='_blank' className='social-icon-link linkedin'>
              <i className='fab fa-linkedin' /></a>
              <a href='mailto:kristine.rgonz@gmail.com' target='_blank' className='social-icon-link email'>
              <i className='fas fa-envelope' /></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;