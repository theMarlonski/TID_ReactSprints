import React from 'react';
import './SlideBar.css';
import Multiple from "../Ressources/Icons/multiplepics.svg";

function SlideBar() {
    return (
        <div className="slide-bar">
            <div className='multiple'>
                <img src={Multiple} alt="Multiple" />
            </div>
        </div>
    );
  }
  
  export default SlideBar;