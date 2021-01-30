import React from 'react';
import {Button} from '../buttons-folder/Button';
import './Modal.css';
import EventsData from '../events-folder/EventsData.json'

const Modal3 = ({show, close}) => {
    return (
        <>
        <div className="modal-wrapper"
        style={{
            transform: show ? 'translateX(0vh)' : 'translateX(-250vh)',
            opacity: show ? '1' : '0',
            transition: show ? '1s' : '1s',
            zIndex : show ? '100000' : '2000',
            height : show ? '' : '100vh',
        }}
        >
            <div className="modal-header">
                <p>Edit (Add/Delete) Events</p>
                <span onClick={close} className="btn-cm">x</span>
            </div>
            <h1>Add New Event</h1>
            <div className="modal-body3">
                        <form>
                            <div className="events-grid">
                                <div className="title-box">
                                    <h3>Event Title:</h3>
                                    <textarea placeholder="Enter Event Title"></textarea> 
                                </div>
                                <div className="description-box">
                                    <h3>Event Description:</h3>
                                    <textarea placeholder="Enter Event Description"></textarea> 
                                </div>
                                <div class="time-flex1">
                                    <h3>Start Time:</h3>
                                    <input className="time-inp" type="time" />
                                </div>
                                
                                <div class="time-flex2">
                                    <h3>End Time:</h3>
                                    <input className="time-inp" type="time" />
                                </div>
                                <div className="img-upload">
                                    <h3> Upload Image:</h3>
                                    <input class type="File" accept="image/*" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <Button onClick={close} buttonStyle="btn--fixed">Delete</Button>
                                <Button buttonStyle="btn--fixed">Add Event</Button>
                            </div>
                        </form>
                    </div>


            <h1>Current Events:</h1>
            <div className="modal-content3">
                {EventsData.map((slide)=> {
                    return(
                    <div className="modal-body3">
                        <form>
                            <div className="events-grid">
                                <div className="title-box">
                                    <h3>Event Title:</h3>
                                    <textarea defaultValue={slide.title}></textarea> 
                                </div>
                                <div className="description-box">
                                    <h3>Event Description:</h3>
                                    <textarea defaultValue={slide.description}></textarea> 
                                </div>
                                <div class="time-flex1">
                                    <h3>Start Time:</h3>
                                    <input className="time-inp" type="time" />
                                </div>
                                
                                <div class="time-flex2">
                                    <h3>End Time:</h3>
                                    <input className="time-inp" type="time" />
                                </div>
                                <div className="img-upload">
                                    <h3> Upload Image:</h3>
                                    <input class type="File" accept="image/*" />
                                </div>
                                <div className="events-image">
                                    <h3>Current Event Image:</h3>
                                    <img className="current-image" src={slide.image} alt="" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <Button onClick={close} buttonStyle="btn--fixed">Delete</Button>
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

export default Modal3
