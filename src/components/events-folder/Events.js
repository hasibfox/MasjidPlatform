import React, {useState} from 'react';
import './Events.css';
import {Button} from '../buttons-folder/Button';
import EventsData from './EventsData.json';

var count = 1
var isTrue = true;

const Events = () => {

    const [visible,setVisible] = useState(3);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue +3);
        count = count +1;
    };
    const showLessItems = () => {
        setVisible((prevValue) => prevValue -3);
        count = count - 1;
    };
    const StayAtItems = () => {
        setVisible((prevValue) => prevValue);
    };
 
    if (count <= 1 ) {
        isTrue = true;
    }
    else if (count > 1){
        isTrue = false;
    };



    return (
        <div className="events-body-container">
            <h1>Events and Announcements!</h1><br/>
            <div className="events-container">
                {EventsData.slice(0,visible).map(EventsData => (
                    <div className="event-card">            
                        <h2> {EventsData.title}</h2>
                        <div className="events-content">
                            <div>
                                <img src={EventsData.image}></img>
                                <div className="dateNtime">
                                    <div className="together">
                                        <i class="fas fa-calendar-alt"></i>
                                        <p>{EventsData.date}</p>
                                    </div>
                                    <div className="together">
                                        <i class="far fa-clock"></i>
                                        <p>{EventsData.time}</p>
                                    </div>
                                </div>
                            </div>
                        <h3>{EventsData.description}</h3>

                        </div>
                        
                        
                    </div>
                ))}

            </div>
            <div className="events-buttons">
                <Button onClick={showMoreItems}>Load More</Button>
                <Button onClick={isTrue ? StayAtItems : showLessItems}>Load Less</Button>
            </div>
            
        </div>
    )

}



export default Events
