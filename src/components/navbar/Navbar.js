import React, {useState, useEffect} from 'react'
import './Navbar.css';
import { Button } from '../buttons-folder/Button';
import { Link, animateScroll as scroll } from "react-scroll";
import {Link as Move} from 'react-router-dom';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button,setButton] = useState(true)
    const user = "UDICPAFH";
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    useEffect(() => {
        showButton();
      }, []);
    window.addEventListener('resize', showButton);

return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <div className="logo-container">
            <Link to="/" className="navbar-logo"> <img src="https://masjidalmadinah.org/wp-content/uploads/2018/04/cropped-MaM-Logo.png"></img></Link>  
            </div>
            <div className="link-container">
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link
                            className="nav-links" 
                            onClick={closeMobileMenu}
                            activeClass="active"
                            to="about-us"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                        > 
                        About Us </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link
                            className="nav-links" 
                            onClick={closeMobileMenu}
                            activeClass="active"
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                        > 
                        Services </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-links" 
                            onClick={closeMobileMenu}
                            activeClass="active"
                            to="events"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={800}
                        > 
                        Events </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-links" 
                            onClick={closeMobileMenu}
                            activeClass="active"
                            to="donate"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                        > 
                        Donate </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu} >
                        Sign Up
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/dashboard' className='nav-links' onClick={closeMobileMenu} >
                        Sign In
                        </Link>
                    </li>
                    

                </ul>

                <div className='profile-dropdown'>
                    <Move to='/actset'>
                        <Button buttonStyle='btn--primary'>{user} 
                        <i class="fa fa-caret-down"></i>
                        </Button>
                    </Move>
                    <div class="dropdown-content">
                        <Move to='/actset'>
                            Account Settings 
                        </Move>
                        <Move to='/masteredit'>
                            Edit Webpage 
                        </Move>
                        <Move to='/faq'>
                            Frequently Asked Questions
                        </Move>

                        <Move to='/sign-up'>
                            Sign Up
                        </Move>

                    </div>
                </div>
                
                {/* <Link to="/dashboard">
                        <Button buttonStyle='btn--outline'>Sign In</Button>
                    </Link>

                    <Link to="/sign-up">
                        <Button buttonStyle='btn--outline'>Sign Up</Button>
                    </Link> */}
                
                </div>
                </div>

    </nav>
    </>
    );
}

export default Navbar;

