import React, { useState } from 'react';
import axios from 'axios';

export const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    if(e.currentTarget.name === "userName"){
      setUserName(e.target.value);
    } else{
      setPassword(e.target.value);
    }
  }

  const login = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', {
      username: userName,
      password: password,
    })
    .then(res => {
      localStorage.setItem('token', res.data.payload);
    })
    .catch(err => console.log(err));
  }

  return(
    <div>
      <form onSubmit={login}>
        <input 
        type="text"
        name="userName"
        value={userName}
        onChange={handleChange}
        />

        <input 
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
)}