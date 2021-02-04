import React from 'react';
import { Button } from '../../buttons-folder/Button';
import './Dashboard.css';
import {Link} from 'react-router-dom';

const MasterEdit = () => {
    

    return (
        <div className="dashboard-container">
            <h1>Account Settings</h1>
            <div className="settings-links">

                <Link to='/actset'
                style={{
                    textDecoration:'none'
                }}
                ><h2 className="inactive-page-text">Account Settings</h2> </Link>

                <Link to='/masteredit'
                style={{
                    textDecoration:'none'
                }}
                ><h2 className="active-page-text">Edit Page</h2></Link>

                <Link to='/faq'
                style={{
                    textDecoration:'none'
                }}
                ><h2 className="inactive-page-text"> Frequently Asked Questions</h2></Link>
            </div>
            <form className='acc-content'>
                <h3>Slider Section</h3>
                    <div className="all-slides">
                        <div className="one-slide">
                            <h4>Slide 1</h4>
                                <div className="allslide-edit">
                                <form name="" method="" action="">
                                    <input type="File" accept="image/*"></input>
                                </form>
                                <p>Current Image:</p>
                                <img className="current-image" src= 'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                                alt="No Image"></img> 
                                </div>
                        </div>

                        <div className="one-slide">
                            <h4>Slide 1</h4>
                                <div className="allslide-edit">
                                <form name="" method="" action="">
                                    <input type="File" accept="image/*"></input>
                                </form>
                                <p>Current Image:</p>
                                <img className="current-image" src= 'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                                alt="No Image"></img> 
                                </div>
                        </div>

                        <div className="one-slide">
                            <h4>Slide 1</h4>
                                <div className="allslide-edit">
                                <form name="" method="" action="">
                                    <input type="File" accept="image/*"></input>
                                </form>
                                <p>Current Image:</p>
                                <img className="current-image" src= 'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                                alt="No Image"></img> 
                                </div>
                        </div>

                        <div className="one-slide">
                            <h4>Slide 1</h4>
                                <div className="allslide-edit">
                                <form name="" method="" action="">
                                    <input type="File" accept="image/*"></input>
                                </form>
                                <p>Current Image:</p>
                                <img className="current-image" src= 'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                                alt="No Image"></img> 
                                </div>
                        </div>

                        <div className="one-slide">
                            <h4>Slide 1</h4>
                                <div className="allslide-edit">
                                <form name="" method="" action="">
                                    <input type="File" accept="image/*"></input>
                                </form>
                                <p>Current Image:</p>
                                <img className="current-image" src= 'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                                alt="No Image"></img> 
                                </div>
                        </div>

                        <div className="one-slide">
                            <h4>Slide 1</h4>
                                <div className="allslide-edit">
                                <form name="" method="" action="">
                                    <input type="File" accept="image/*"></input>
                                </form>
                                <p>Current Image:</p>
                                <img className="current-image" src= 'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                                alt="No Image"></img> 
                                </div>
                        </div>
                        
                    </div>
                    
                
                <Button>Save All Changes</Button>

                <br/>
                <hr/>

                <h3> Introduction Section</h3>
                    <div className="modal-body2">
                        <form>
                            <p> Introductory Message</p>
                            <textarea className="intro-message"  wrap="soft" ></textarea>
                            <p> Description</p>
                            <textarea className="desc-message" wrap="soft" ></textarea>
                        </form>
                    </div>
                <Button>Save All Changes</Button>

                <br/>
                <hr/>

                <h3> Events Section</h3>
                        <form>
                            <div className="master-events-grid">
                                <div className="mtitle-box">
                                    <p>Event Title:</p>
                                    <textarea></textarea> 
                                </div>
                                <div className="mdescription-box">
                                    <p>Event Description:</p>
                                    <textarea ></textarea> 
                                </div>
                                <div class="mtime-flex1">
                                    <p>Start Time:</p>
                                    <input className="time-inp" type="time" />
                                </div>
                                
                                <div class="mtime-flex2">
                                    <p>End Time:</p>
                                    <input className="time-inp" type="time" />
                                </div>
                                <div className="mimg-upload">
                                    <p> Upload Image:</p>
                                    <input class type="File" accept="image/*" />
                                </div>
                                <div className="mevents-image">
                                    <p>Current Event Image:</p>
                                    <img className="mcurrent-image" src='https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' alt="" />
                                </div>
                            </div>
                        </form>

                <br/>
                <hr/>
                <Button type="submit">Save All Changes</Button>

                <h3> Events Section</h3>

                <h4 className="acc-text">Current Password:</h4><br/>
                <input type="text" id="fname" name="fname"/> <br/>

                <h4 className="acc-text">New Password:</h4><br/>
                <input type="text" id="fname" name="fname"/><br/>

                <h4 className="acc-text">Re-Enter new password:</h4><br/>
                <input type="text" id="fname" name="fname"/>

                <Button>Save All Changes</Button>

                <br/>
                <hr/>

                <h3> Donation Section</h3>

                <h4 className="acc-text">Current Password:</h4><br/>
                <input type="text" id="fname" name="fname"/> <br/>

                <h4 className="acc-text">New Password:</h4><br/>
                <input type="text" id="fname" name="fname"/><br/>

                <h4 className="acc-text">Re-Enter new password:</h4><br/>
                <input type="text" id="fname" name="fname"/>

                <Button>Save All Changes</Button>

                <br/>
                <hr/>

                <h3> Playlist Section</h3>

                <h4 className="acc-text">Current Password:</h4><br/>
                <input type="text" id="fname" name="fname"/> <br/>

                <h4 className="acc-text">New Password:</h4><br/>
                <input type="text" id="fname" name="fname"/><br/>

                <h4 className="acc-text">Re-Enter new password:</h4><br/>
                <input type="text" id="fname" name="fname"/>

                <Button>Save All Changes</Button>

                <br/>
                <hr/>

            </form>
        </div>
    )
}

export default MasterEdit
