import React from 'react';
import './LoginScreen.css';
import WorldLogo from '../components/LoginWorldLogo.js';
import LoginLogo from '../components/LoginLogo.js';
import LoginForm from '../components/LoginForm.js';

function LoginScreen() {
  return (
      <div className="login-container">
        <LoginLogo />
        <WorldLogo />
        <LoginForm />
      </div>
  );
}

export default LoginScreen;
