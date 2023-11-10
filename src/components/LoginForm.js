import React from 'react';
import './LoginForm.css';

function LoginForm() {
  return (
    <div className="login-form">
      <input type="text" placeholder="E-Mail" />
      <input type="password" placeholder="Password" />
      <div className="login-button">
        <button> LOGIN </button>
      </div>
    </div>
  );
}

export default LoginForm;
