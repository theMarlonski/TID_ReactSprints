import React from "react";
import "./Header.css";
import Logo from "../Ressources/Icons/Logo.svg";

function Header(props) {
    return (
      <header>
        <div className="logo">
          <img src={Logo} alt="LocalsLogo" />
        </div>
        <div className="icon">
          <img src={props.IconPath} alt="Icon" />
        </div>
      </header>
    );
  }

export default Header;