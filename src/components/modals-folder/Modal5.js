import React from 'react';
import {Button} from '../buttons-folder/Button';
import './Modal.css';

const Modal5 = ({show, close}) => {
    return (
        <>
        <div className="modal-wrapper"
        style={{
            transform: show ? 'translateX(0vh)' : 'translateX(-250vh)',
            opacity: show ? '1' : '0',
            transition: show ? '1s' : '1.5s',
            zIndex : show ? '100000' : '2000'
        }}
        >
            <div className="modal-header">
                <p>Edit (Add/Delete) Services</p>
                <span onClick={close} className="btn-cm">x</span>
            </div>
            <div className="modal-content5">
                    <div className="modal-body5">
                        <form>
                            <h2>Choose an Icon</h2>
                            <div className="services-icons">
                                <label>
                                    <input type="radio" name="test" value="small"/>
                                    <i className="fas fa-chalkboard-teacher"></i>                                
                                    </label>
                    
                                <label>
                                    <input type="radio" name="test" value="big"/>
                                    <i className="fas fa-chalkboard-teacher"></i>                                
                                 </label>
                                 <label>
                                    <input type="radio" name="test" value="small"/>
                                    <i className="fas fa-chalkboard-teacher"></i>                                
                                    </label>
                    
                                <label>
                                    <input type="radio" name="test" value="big"/>
                                    <i className="fas fa-chalkboard-teacher"></i>                                
                                 </label>
                                 <label>
                                    <input type="radio" name="test" value="small"/>
                                    <i className="fas fa-chalkboard-teacher"></i>                                
                                    </label>
                    
                                <label>
                                    <input type="radio" name="test" value="big"/>
                                    <i className="fas fa-chalkboard-teacher"></i>                                
                                 </label>
                                 <label>
                                    <input type="radio" name="test" value="small"/>
                                    <i className="fas fa-chalkboard-teacher"></i>                                
                                    </label>
                    
                                <label>
                                    <input type="radio" name="test" value="big"/>
                                    <i className="fas fa-chalkboard-teacher"></i>                                
                                 </label>

                            </div>
                            
                            <div className="services-grid">
                                <div className="title-box">
                                    <h3>Service Title</h3>
                                    <textarea defaultValue=""></textarea> 
                                </div>
                                <div className="description-box">
                                    <h3>Services Description:</h3>
                                    <textarea defaultValue=""></textarea> 
                                </div>
                            </div>
                            <div className="modal-footer">
                                <Button onClick={close} buttonStyle="btn--fixed">Cancel</Button>
                                <Button buttonStyle="btn--fixed">Add</Button>
                            </div>
                        </form>
                    </div>
                    
                
            </div>
        </div>
        </>
    )
}

export default Modal5
