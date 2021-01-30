import React from 'react';
import {Button} from '../buttons-folder/Button';
import './Modal.css';

const Modal2 = ({show, close, data}) => {

    /*
    var datas = [
        {
            welcome:"sds",
            description: "sdfsdfs"
        }
    ]*/
    return (
        <>
        <div className="modal-wrapper"
        style={{
            transform: show ? 'translateX(0vh)' : 'translateX(-250vh)',
            opacity: show ? '1' : '0',
            transition: show ? '1s' : '1s',
            zIndex : show ? '100000' : '2000'
        }}
        >
            <div className="modal-header">
                <p>Edit (Add/Delete) Main Page</p>
                <span onClick={close} className="btn-cm">x</span>
            </div>
            <div className="modal-content2">
                {data.map((piece)=> {
                    return(
                    <div className="modal-body2">
                        
                        <form >
                            <h4> Introductory Message</h4>
                            <textarea className="intro-message"  wrap="soft" defaultValue={piece.welcome}></textarea>

                            <h4> Description</h4>
                            <textarea className="desc-message" wrap="soft" defaultValue={piece.description}></textarea>
                        
                            <div className="modal-footer">
                                <Button onClick={close} buttonStyle="btn--fixed">Cancel</Button>
                                <Button buttonStyle="btn--fixed">Save</Button>
                            </div>

                        </form>
                    </div>
                    )
                })}
                
            </div>
            
        </div>
        </>
    )
}

export default Modal2
