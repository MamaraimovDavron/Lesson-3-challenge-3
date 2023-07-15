import React from "react";
import {FaHeart} from 'react-icons/fa';
// import './App.css';

const Card = (props) => {
    return(
            <div className="main-box">
                <div className="box-1">
                    <h2>{props.name}</h2>
                    <img src={props.imgUrl} alt="" />
                    <p className="percent">{props.liked}<FaHeart className="heart"/></p>
                    <p className="release-date">{props.year}</p>
                </div>
        </div>
    );
}

export default Card;