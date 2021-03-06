import React from 'react';
import '../sign-up-folder/Signup.css';
import { Button } from '../../buttons-folder/Button';
import {Link} from  'react-router-dom';
 

function Signin() {
    return (
        <>
        <img className="sign-logo"src="https://masjidalmadinah.org/wp-content/uploads/2018/04/cropped-MaM-Logo.png"></img>
        <div className="already-registered-button" to="/dashboard">
            <Link to ="/">
                <Button buttonStyle="btn--primary">Don't have an account?</Button>
            </Link>
        </div>
        <div className="sign-container">
            <div className="signup-box">

                <form className="login-form">
                    <h2>Log in with your existing account</h2>
                    <input type="email" id="email" placeholder="Email"></input>
                    <h3 className="forgot">Forgot Username?</h3>
                    <input type="text" id="pswrd" placeholder="Password"></input>
                    <h3 className="forgot">Forgot Password?</h3>
                    <div className="sign-up-btn">
                        <Button buttonStyle="btn--primary">Log In!</Button>
                    </div>

                </form>
            </div>

            <div className="dark-overlay"></div>

        </div>
        </>
    )
}

export default Signin
