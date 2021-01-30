import React from 'react';
import Carousel from 'react-elastic-carousel';
import Playlistcard from './Playlistcard';
import EventsData from '../events-folder/EventsData.json';

const Playlist = () => {
    const breakPoints = [
        { width: 400, itemsToShow :1},
        { width: 500, itemsToShow :2},
        { width: 768, itemsToShow :3},
        { width: 1000, itemsToShow :4},
    ]
    return (
        <div className="playlist-container">
            <Carousel breakPoints={breakPoints}>

                {EventsData.map((data)=> {
                    return(
                        <Playlistcard imgsrc= {data.image} imgt = {data.title}/>
                    )
                })}
            </Carousel>
            
        </div>
    )
}

export default Playlist
