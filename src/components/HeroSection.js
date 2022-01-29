import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import './Button.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>KRISTINE GONZALES</h1>
      <div className='hero-btns'>
        <ul>
          <li>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              path='/about'
            >
              GET TO KNOW ME
            </Button>
          </li>
          <li>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              path='/contact-me'
            >
              CONTACT ME
            </Button>
          </li>
          <li>
            <div className="btns btn--resume">
              <a className="btn btn--large btn--primary btn--resume--download" href="./resume-kristinegonzales.pdf" download>DOWNLOAD RESUME</a>
            </div>
          </li>
          

        </ul>
      </div>
    </div>
  );
}

export default HeroSection;
