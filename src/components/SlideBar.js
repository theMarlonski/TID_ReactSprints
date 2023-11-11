import React from 'react';
import './SlideBar.css';
import Circle from "../Ressources/Icons/Circle.svg";
import ColoredCircle from "../Ressources/Icons/ColoredCircle.svg";

function SlideBar() {
    return (
        <div className="slide-bar">
            <div className="icon-slide"><img src={ColoredCircle} alt="filledIn" /></div>
            <div className="icon-slide"><img src={Circle} alt="notfilled" /></div>
            <div className="icon-slide"><img src={Circle} alt="notfilled" /></div>
            <div className="icon-slide"><img src={Circle} alt="notfilled" /></div>
        </div>
    );
  }
  
  export default SlideBar;