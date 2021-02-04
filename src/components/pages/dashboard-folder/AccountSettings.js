import React from 'react';
import { Button } from '../../buttons-folder/Button';
import './Dashboard.css';
import {Link} from 'react-router-dom';

const AccountSettings = () => {
    

    return (
        <div className="dashboard-container">
            <h1>Account Settings</h1>
            <div className="settings-links">

                <Link to='/actset'
                style={{
                    textDecoration:'none'
                }}
                ><h2 className="active-page-text">Account Settings</h2> </Link>

                <Link to='/masteredit'
                style={{
                    textDecoration:'none'
                }}
                ><h2 className="inactive-page-text">Edit Page</h2></Link>

                <Link to='/faq'
                style={{
                    textDecoration:'none'
                }}
                ><h2 className="inactive-page-text"> Frequently Asked Questions</h2></Link>
            </div>
            <form className='acc-content'>
                <h3>General</h3>

                <h4 className="acc-text">Organization Name:</h4><br/>
                <input type="text" id="fname" name="fname"/><br/>

                <h4 className="acc-text">Username:</h4><br/>
                <input type="text" id="fname" name="fname"/>
                
                <Button>Save All Changes</Button>

                <br/>
                <hr/>

                <h3> Password</h3>

                <h4 className="acc-text">Current Password:</h4><br/>
                <input type="text" id="fname" name="fname"/> <br/>

                <h4 className="acc-text">New Password:</h4><br/>
                <input type="text" id="fname" name="fname"/><br/>

                <h4 className="acc-text">Re-Enter new password:</h4><br/>
                <input type="text" id="fname" name="fname"/>

                <Button>Save All Changes</Button>

                <br/>
                <hr/>

                <h3> Linked Accounts</h3>

                <h4 className="acc-text">Google</h4><br/>
                <input type="text" id="fname" name="fname"/> <br/>

                <h4 className="acc-text">Facebook</h4><br/>
                <input type="text" id="fname" name="fname"/><br/>

                <h4 className="acc-text">LinkedIn</h4><br/>
                <input type="text" id="fname" name="fname"/>

                <br/>
                <hr/>
                <Button>Save All Changes</Button>
            </form>
        </div>
    )
}

export default AccountSettings
