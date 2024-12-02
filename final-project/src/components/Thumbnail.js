import React from "react";
import '../App.css';
import homepage from '../assets/homepage.png';
import { Link } from "react-router-dom";

export const Thumbnail = () => {

    return(
        <div className="thumbnail">
        <img src={homepage} alt='' className='background1'/>
            <div className="source-button">
             <Link to='/services'><button className='button-59'>Services Provided</button></Link>
            </div>
        </div>
    );
}