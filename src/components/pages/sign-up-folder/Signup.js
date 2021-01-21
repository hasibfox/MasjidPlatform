import React from 'react';
import './Signup.css';
import { Button } from '../../buttons-folder/Button';
import {Link} from  'react-router-dom';
 

function Signup() {
    return (
        <>
        <img className="sign-logo"src="https://masjidalmadinah.org/wp-content/uploads/2018/04/cropped-MaM-Logo.png"></img>
        <div className="already-registered-button" to="/dashboard">
            <Link to ="/sign-in">
                <Button buttonStyle="btn--primary">Already Registered?</Button>
            </Link>
        </div>
        <div className="sign-container">
            <div className="signup-box">
                <h2 className="box-title">Create a website for your Masjid Today!</h2>
                <form>
                    <input type="text" id="fname" name="fname" placeholder="First Name"></input>
                    <input type="text" id="lname" name="lname" placeholder="Last Name"></input>
                    <input type="text" id="orgname" name="orgname" placeholder="Organization Name"></input>
                    <input type="email" id="ename" name="email" placeholder="Email"></input>
                    <input type="text" id="pswrd" name="pswrd" placeholder="Password"></input>
                    <input type="text" id="cpswrd" name="cpswrd" placeholder="Confirm Password"></input>
                    <div className="sign-up-btn">
                        <Button buttonStyle="btn--primary">Sign Up!</Button>
                    </div>
                    <p className="policy"> By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>

                </form>
            </div>

            <div className="dark-overlay"></div>

        </div>
        </>
    )
}

export default Signup
