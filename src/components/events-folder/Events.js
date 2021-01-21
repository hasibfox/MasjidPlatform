import React, {useEffect, useState} from 'react';
import './Events.css';
import {Button} from '../buttons-folder/Button';
import EventsData from './EventsData.json';

var count = 1
var isTrue = true;
const Events = () => {

    const [items,setItems] = useState([]);
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
console.log(EventsData)
    useEffect(() => {
        fetch(EventsData)
        .then((res) => res.json())
        .then((data) => setItems(data));
    },[])


    return (
        <>
            <div className="events-container">
                {items.slice(0,visible).map(items => (
                    <div className="card">
                        <div className="id">
                            <span>{items.id}</span>
                        </div>
                        <p> {items.body}</p>
                    </div>
                ))}
                <Button onClick={showMoreItems}>Load More</Button>
                <Button onClick={isTrue ? StayAtItems : showLessItems}>Load Less</Button>

            </div>
            
        </>
    )

}



export default Events
