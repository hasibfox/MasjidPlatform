import React from 'react';
import './Playlist.css';

const Playlistcard = ({imgsrc , imgt}) => {
    return (
        <>
            <div className="playlist-card">
                <div className="playlist-card-img">
                    <img src={imgsrc}/>

                </div>

                <div className="playlist-card-title">
                    <p>{imgt}</p>
                </div>
            </div>
            
        </>
    )
}

export default Playlistcard
