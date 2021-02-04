import React from 'react';
import { Button } from '../buttons-folder/Button';
import './Donate.css';

const Donate = () => {
    return (
        <div className="donate-container" id="donate">

            <div className="donate-content">
                <Button><p>Donate Now!</p> <i class="fas fa-donate"></i></Button>
                <h2> Please Donate to Make our Masjid a better community center!</h2>
            </div>
        </div>
    )
}

export default Donate
