import React from 'react';
import '../../App';
import './Front.css';
import { Button } from '../buttons-folder/Button';

function Front() {
    
    return (
      <div className="front-container">
        <div className="front-left">
          <h1>Asalamu Alaikum Wa Rahmatullahi Wa Barakatuh</h1>
          <h2>Welcome to Masjid Al-Aqsa</h2>
          <p>Masjid Al Madinah is a cooperative effort of the Muslim Community in Upper Darby.
The Masjid was incorporated in 1999 to provide a place of Islamic activities for the growing Muslim Community in Delaware County.</p>
        </div>
        <div className="front-right">
          <h1>Prayer Times</h1>
         <iframe className="prayer-table" src="https://www.islamicfinder.org/prayer-widget/"></iframe>
        </div>

      </div>
    );
  }
  


export default Front
