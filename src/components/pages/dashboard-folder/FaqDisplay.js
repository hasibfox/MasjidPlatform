import React from 'react';
import FaqTemplate from './FaqTemplate';
import {Link} from 'react-router-dom';
import { useState } from 'react';

const FaqDisplay = () => {

    const [FaqActive, setFaqActive] = useState('')

    return (
        <div>
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
                ><h2 className="inactive-page-text">Edit Page</h2></Link>

                <Link to='/faq'
                style={{
                    textDecoration:'none'
                }}
                ><h2 className="active-page-text"> Frequently Asked Questions</h2></Link>
            </div>
            <FaqTemplate current='title1' FaqActive={FaqActive} setFaqActive={setFaqActive} />
            <FaqTemplate current='title2' FaqActive={FaqActive} setFaqActive={setFaqActive} />
            <FaqTemplate current='title3' FaqActive={FaqActive} setFaqActive={setFaqActive} />

        </div>
            
        </div>
    )
}

export default FaqDisplay
