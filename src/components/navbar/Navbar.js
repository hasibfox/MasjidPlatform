import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { Button } from '../buttons-folder/Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button,setButton] = useState(true)

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
                        <Link to ="/" className="nav-links" onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to ="/prayertimes" className="nav-links" onClick={closeMobileMenu}>
                            Prayer Times
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to ="/services" className="nav-links" onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to ="/events" className="nav-links" onClick={closeMobileMenu}>
                            Events
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to ="/donate" className="nav-links" onClick={closeMobileMenu}>
                            Donate
                        </Link>
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

                <div className='sign'>
                    <Link to="/dashboard">
                        <Button buttonStyle='btn--outline'>Sign In</Button>
                    </Link>

                    <Link to="/sign-up">
                        <Button buttonStyle='btn--outline'>Sign Up</Button>
                    </Link>
                </div>
                
                
                
                </div>
                </div>

    </nav>
    </>
    );
}

export default Navbar;

