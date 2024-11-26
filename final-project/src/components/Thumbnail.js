import React from "react";
import '../App.css';
import homepage from '../assets/homepage.png';

export const Thumbnail = () => {

    return(
        <div className="thumbnail">
        <img src={homepage} alt='' className='background1'/>
            <div className="source-button">
             <button className='button-59'>Services Provided</button>
            </div>
        </div>
    );
}