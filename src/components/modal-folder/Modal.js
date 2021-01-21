import React from 'react'
import {Button} from '../buttons-folder/Button'
import './Modal.css'

const Modal = ({show, close}) => {
    return (
        <>
        <div className="modal-wrapper"
        style={{
            transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: show ? '1' : '0',
            transition: show ? '1.3s' : '1s'
        }}
        >
            <div className="modal-header">
                <p>Welcome to osaut site</p>
                <span onClick={close} className="btn-cm">x</span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <h4>Modal</h4>
                    <p>rrnronnovrnreaojnveraonjveranioveronnoiveraoninvronrvonieanooaenvowiranvoinoiwanf</p>
                </div>
            </div>
            <div className="modal-footer">
                <Button onClick={close} buttonStyle="btn--primary">okay</Button>
            </div>
        </div>
        </>
    )
}

export default Modal
