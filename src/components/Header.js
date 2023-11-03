import React from "react";
import "./Header.css";
import Logo from "../../Ressources/Icons/Logo.svg";
import NotificationBell from "../../Ressources/Icons/NotificationBell.svg";


function Header(props) {
    return ( 
        <header>
            <div className="Logo">
                <img src={Logo} alt = "LocalsLogo" />
            </div>
            {props.showNotificationIcon ? (
                <div className="NotificationIcon">
                    <span className="NotificationNumber"> {props.notificationNumber} </span>
                    <img src={NotificationBell} alt = "NotificationIcon" />
                </div>
            ) : ( 
                <div className='AlternativeIcon'>
                    <img src = {props.alterativeIconSrc} alt = "AlternativeIcon" />
                </div>
            )}
        </header>
    );
}

export default Header;