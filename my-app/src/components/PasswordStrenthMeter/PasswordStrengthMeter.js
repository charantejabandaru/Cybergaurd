// PasswordStrengthChecker.js
import './PasswordStrengthMeter.css';
import React, { useState } from 'react';
const PasswordStrengthMeter = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');
  const [message, setMessage]= useState('');

  const checkPasswordStrength = () => {
    if(password.length<3){
      setPassword("");
      setMessage("Enter minimum of 3 characters");
      return ;
    }
    const hasNumber=/\d/.test(password);
    const hasLowerCase=/[a-z]/.test(password);
    const hasUpperCase=/[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (password.length >= 8 && hasNumber && hasLowerCase && hasUpperCase && hasSpecialChar) {
       setStrength('SECURE');
       setMessage('Your password is secure');
    } else if (password.length >= 6 &&hasNumber&&hasSpecialChar&& ( hasLowerCase || hasUpperCase)) {
       setStrength('STRONG');
       setMessage('Your password is strong, but there is room for improvement.');
    } else if ((password.length >=6&&hasNumber&&(hasLowerCase||hasUpperCase))||(password.length<=6&&hasSpecialChar)) {
        setStrength('AVERAGE');
        setMessage('Your password is not strong better to improvYour password is not strong enough. it is advisable to improve it.e');
    } else {
        setStrength('WEAK');
        setMessage('Note: Your password is weak add combination of numbers and special characters to strengthen your password');
    }
  };

  return (
    <div>
      <h1>CYBERGAURD</h1>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={checkPasswordStrength}>Check Strength</button>
      <p>Password Strength: {strength}<br></br>{message}</p>
      <div>
        <ul>
          <li>Use a unique password for each account to prevent unauthorized access.</li>
          <li>Avoid using easily guessable information, such as your name or birthdate, in your passwords.</li>
          <li>Include a mix of uppercase letters, lowercase letters, numbers, and special characters in your password.</li>
          <li>Regularly update your passwords and avoid using the same password for an extended period.</li>
          <li>Consider using a reputable password manager to generate and store complex passwords securely.</li>
        </ul>
      </div>

    </div>
  );
};

export default PasswordStrengthMeter;