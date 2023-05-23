import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../Features/userSLicer';
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform your validation here
    if (email === '' || password === '') {
      setErrorMessage(alert('Email and password are required.'));
    } else {
      setErrorMessage('');

      // Retrieve user credentials from local storage
      const storedCredentials = localStorage.getItem('userCredentials');

      if (storedCredentials) {
        const storedUser = JSON.parse(storedCredentials);

        // Check if entered credentials match stored credentials
        if (email === storedUser.email && password === storedUser.password) {
          dispatch(login(storedUser));
          navigate('/home'); // Redirect to the home page
        } else {
          alert('Please Register before Login.');
        }
      } else {
        alert('No registered user found.');
      }
    }
  };

  return (
    <div className="loginpage">
      <form className="loginform" onSubmit={handleLogin}>
        <div className="login">
          <h1>
            Login <span className="span3">Here!</span>
          </h1>
        </div>
        <div className="email">
          <br />
          <input
            type="text"
            name="address"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <div className="button">
          <button type="submit" className="lbutton">
            Login
          </button>
        </div>
        <div className='newuser'>
        <h5>New User? If you want to Register,<a href='/'>click here</a></h5>
        </div>
      </form>
    </div>
  );
};

export default Login;
