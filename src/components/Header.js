import React from "react";
import "./Header.css";
import Logo from "../Ressources/Icons/Logo.svg";
import NotificationBell from "../Ressources/Icons/NotificationBell.svg";


function Header(props) {
    return ( 
        <header>
            <div className="logo">
                <img src={Logo} alt = "LocalsLogo" />
            </div>
            {props.showNotificationIcon ? (
            <div className="notification-icon">
                <img src={NotificationBell} alt = "NotificationIcon" />
            </div>
        ) : ( 
            <div className='alternative-icon'>
                <img src = {props.alterativeIconSrc} alt = "AlternativeIcon" />
            </div>
            )}
        </header>
    );
}

export default Header;