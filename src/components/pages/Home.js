import React, { useState} from 'react'
import '../../App.css';
import ImageSlider from '../carousel-folder/ImageSlider'
import {SliderData} from '../carousel-folder/SliderData'
import Front from '../front-folder/Front'
import Modal from '../modal-folder/Modal';
import Navbar from '../navbar/Navbar';
import {Button} from '../buttons-folder/Button'
import './Home.css'
import Events from '../events-folder/Events'

function Home() {
    const [show,setShow] = useState(false);
    const closeModalHandler = () => setShow(false)

    return(
        <>
    {show ? <div  onClick={closeModalHandler}className="modal-drop"></div> : null}

    <Navbar /> 
    <Events />
    {/*<Front> */}
    {/* <div>
    <ImageSlider slides={SliderData} /> 

    <Button onClick={() => setShow(true)}> Open Modal</Button>
    <h3>sfsdfnidsjfnsdoifnsdoifnodiagfneariugnwaoiugnwergiurawngwiuargn</h3>
    <Modal show={show} close={closeModalHandler}/>
    </div> */}

    </>
    );
    
}

export default Home