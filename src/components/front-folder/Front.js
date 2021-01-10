import React from 'react';
import '../../App';
import './Front.css';
import { Button } from '../buttons-folder/Button';

function Front() {
    
    return (
      <div className="front-container">
          <h3>Masjid Short Label</h3>
          <h1> Masjid Name</h1>
          <h3> Masjid short description: It is a long established fact that a reader will be distracted by the readable content 
            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
         of letters, as opposed to using 'Content here, content here', making it look like readable English.</h3>
         <iframe className="poop" scrolling="no" src="https://www.islamicfinder.org/prayer-widget/"> </iframe>
         
      </div>
    );
  }
  


export default Front
