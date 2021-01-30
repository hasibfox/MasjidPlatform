import React from 'react';
import './Footer.css';
import {Button} from '../buttons-folder/Button';
const Footer = () => {
    return (
        <div>
            <div class="footer-container">
    <div class="footer-logo">
        <img src="https://masjidalmadinah.org/wp-content/uploads/2018/04/cropped-MaM-Logo.png"></img>
    </div>
    <div class="contact-us">
        <h3>Contact Us!</h3>
        <h4>Phone: 123-123-1234</h4>
        <h4>Email: randomemail@gmail.com</h4>
        <h4>Address: 1000 Masjid Lane, MI, 18810</h4>
    </div>
     <div class="mailing-list">
         <div class="mailing-text">
            <div class="follow-us-text">
                <h3>Mailing List</h3>
           </div>
             <form className="mailing-list-form">
                <label htmlFor="email">Enter your e-mail to receive our digital newsletter.</label><br></br>
                <input type="text" id="lname" name="lname" placeholder="E-mail Address"></input>
                <div class="button">
                    <Button> Submit!</Button>
                </div>
            </form>
         </div>
     </div>
     <div class="follow-us">
         <div class="follow-us-text">
             <h3>Follow Us!</h3>
        </div>
         <div class="follow-us-icons">
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-twitter-square"></i> 
            <i class="fab fa-instagram-square"></i>
            <i class="fab fa-youtube-square"></i>
         </div>
        </div>

    <div class="references">
        <h3>Quick References</h3>
        <h4>Donate</h4>
        <h4>Salah Times</h4>
            <div class="arrow-up">
        <i class="fas fa-arrow-up"></i>
    </div>
    </div>

  
  </div>

        </div>
    )
}

export default Footer
