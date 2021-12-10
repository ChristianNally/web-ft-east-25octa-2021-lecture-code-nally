import { useState } from 'react';
import useInput from '../hooks/useInput';

const Input = () => {

  const usernameInput = useInput('');
  const passwordInput = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thanks for logging in ${username} with password: ${password}`);
  };

  return (
    <div>
      <h2>Input Hook</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input 
          type="text"
          id="username"
          {...usernameInput}
        />
        <br/>
        <label htmlFor="password">Password:</label>
        <input 
          type="text"
          id="password"
          value={password}
          onChange={onChangePassword}
        />
        <br/>
        <button type="submit">Login!</button>
      </form>
    </div>
  );
};

export default Input;

