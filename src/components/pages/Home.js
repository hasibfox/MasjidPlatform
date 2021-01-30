import React, { useState} from 'react'
import '../../App.css';
import ImageSlider from '../carousel-folder/ImageSlider';
import {SliderData} from '../carousel-folder/SliderData';
import Front from '../front-folder/Front';
import {FrontData} from '../front-folder/FrontData';

import Modal1 from '../modals-folder/Modal1';
import Modal2 from '../modals-folder/Modal2';
import Modal3 from '../modals-folder/Modal3';
import Modal4 from '../modals-folder/Modal4';

import Navbar from '../navbar/Navbar';
import {Button} from '../buttons-folder/Button';
import './Home.css';
import Events from '../events-folder/Events';
import Playlist from '../playlist-folder/Playlist';
import Footer from '../footer-folder/Footer';


function Home() {
    const [show,setShow] = useState(false);
    const closeModalHandler = () => setShow(false)

    const [show2,setShow2] = useState(false);
    const closeModalHandler2 = () => setShow2(false)

    const [show3,setShow3] = useState(false);
    const closeModalHandler3 = () => setShow3(false)
    
    const [show4,setShow4] = useState(false);
    const closeModalHandler4 = () => setShow4(false)
    
    return(
        <div className="home-container">
            {show ? <div  onClick={closeModalHandler}className="modal-drop"></div> : null}
            {show2 ? <div  onClick={closeModalHandler2}className="modal-drop"></div> : null}
            {show3 ? <div  onClick={closeModalHandler3}className="modal-drop"></div> : null}
            {show4 ? <div  onClick={closeModalHandler4}className="modal-drop"></div> : null}

            <Navbar /> 

            <div style={{
                marginTop: '1vh'
            }} className="test-button">
                <Button buttonStyle="btn--edit" onClick={() => setShow(true)}><i class="far fa-edit"></i> Edit Slides Sections</Button>
            </div>
            <Modal1 slides={SliderData} show={show} close={closeModalHandler}/>
            <ImageSlider slides={SliderData} /> 

            <div className="test-button">
                <Button buttonStyle="btn--edit" onClick={() => setShow2(true)}><i class="far fa-edit"></i>Edit Introduction Section</Button>
            </div>
            <Modal2 data={FrontData} show={show2} close={closeModalHandler2}/>
            <Front/>

            <div className="test-button">
                <Button buttonStyle="btn--edit" onClick={() => setShow3(true)}><i class="far fa-edit"> Edit Events Section</i></Button>
            </div>
            <Modal3 slides={FrontData} show={show3} close={closeModalHandler3}/>
            <Events />

            <div className="test-button">
                <Button buttonStyle="btn--edit" onClick={() => setShow4(true)}><i class="far fa-edit"></i></Button>
            </div>
            <Modal4 slides = {SliderData} show={show4} close={closeModalHandler4}/>
            <Playlist/> 

            <Footer / >
        </div>
    );
    
}

export default Home