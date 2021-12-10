import { useState } from 'react';

const Input = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thanks for logging in ${username} with password: ${password}`);
  };

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <h2>Input Hook</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input 
          type="text"
          id="username"
          value={username}
          onChange={onChangeUsername}
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

