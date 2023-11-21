import React, { useState } from 'react';
import './LoginForm.css';
import Parse from 'parse';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Initialize error state

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    setError(null); // Reset the error state before attempting login

    Parse.User.logIn(email, password)
      .then((user) => {
        console.log(`Logged in as ${user.get('username')}`);
        const activeUser = user.get('objectId');
        navigate('/home/'); // Navigate to the profile page
      })
      .catch((error) => {
        console.error(`Login error: ${error.code} - ${error.message}`);
        setError('Invalid email/password'); // Set the error message
        // Handle login error, e.g., display an error message
      });
  };

  const handleKeyPress = (event) => {
    // Check if the pressed key is "Enter"
    if (event.key === 'Enter') {
      handleLogin(); // Invoke the login function
    }
  };

  return (
    <div className="login-form">
      <input type="text" placeholder="E-Mail or Username" value={email} onChange={handleEmailChange} />
      <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} onKeyDown={handleKeyPress} />
      <div className="login-button">
        <button onClick={handleLogin}>LOGIN</button>
      </div>
      {error && <div className="error-message">{error}</div>} {/* Display error message */}
    </div>
  );
}

export default LoginForm;
