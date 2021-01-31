import React from 'react';
import Carousel from 'react-elastic-carousel';
import Playlistcard from './Playlistcard';
import EventsData from '../events-folder/EventsData.json';

const Playlist = () => {
    const breakPoints = [
        { width: 250, itemsToShow :1},
        { width: 500, itemsToShow :2},
        { width: 700, itemsToShow :3},
        { width: 950, itemsToShow :4},
        { width: 1200, itemsToShow :5},
    ]
    return (
        <>
        <h1 className="playlist-header" id="playlists">Playlists</h1>
        <div className="playlist-container">

            <Carousel breakPoints={breakPoints}>

            {EventsData.map((data)=> {
                    return(
                        <>
                        <Playlistcard imgsrc= {data.image} imgt = {data.title}/>
                        </>
                    )
                })}
            </Carousel>
            
        </div>
    </>
    )
}

export default Playlist
