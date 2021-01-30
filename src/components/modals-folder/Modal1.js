import React from 'react';
import {Button} from '../buttons-folder/Button';
import './Modal.css';

const Modal1 = ({show, close, slides}) => {
    return (
        <>
        <div className="modal-wrapper"
        style={{
            transform: show ? 'translateX(0vh)' : 'translateX(-150vh)',
            opacity: show ? '1' : '0',
            transition: show ? '1s' : '1s',
            zIndex : show ? '100000' : '2000'
        }}
        >
            <div className="modal-header">
                <p>Edit (Add/Delete) Slider Images</p>
                <span onClick={close} className="btn-cm">x</span>
            </div>
            <div className="modal-content">
                {slides.map((slide)=> {
                    return(
                    <div className="modal-body">
                        <h4>{slide.number}</h4>
                        <p></p>
                        <form className="modal-form" name="" method="" action="">
                            <input type="File" accept="image/*"></input>
                        </form>
                        <p>Current Image:</p>
                        <img className="current-image" src={slide.image} alt="No Image"></img>
                    </div>
                    )
                })}
                
            </div>
            <div className="modal-footer">
                <Button onClick={close} buttonStyle="btn--fixed">Cancel</Button>
                <Button buttonStyle="btn--fixed">Submit</Button>

            </div>
        </div>
        </>
    )
}

export default Modal1
