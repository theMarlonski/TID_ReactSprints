import React from 'react';
import Logo from '../Ressources/Icons/Logo.svg';
import './LoginLogo.css';

function LoginLogo() {
  return (
    <div className="login-logo">
      <img src={Logo} alt="logo" />
    </div>
  );
}

export default LoginLogo;
