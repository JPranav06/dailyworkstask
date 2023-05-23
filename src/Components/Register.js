import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Register.css"

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setErrorMessage(alert('Email and password are required.'));
    } else {
      setErrorMessage('');


      const registeredUser = {
        name: name,
        email: email,
        password: password,
        loggedIn: false, 
      };

      localStorage.setItem('userCredentials', JSON.stringify(registeredUser));

      navigate('/login'); 
    }
  };

  return (
    <div className="registerpage">
      <form className="registerform" onSubmit={handleRegister}>
        <div className="register">
          <h1>
            Register <span className="span">Here!</span>
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
        <div className="name">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          <button type="submit" className="rbutton">
            Register
          </button>
        </div>
      </form>
      <div className='alreadyuser'>
        <h5>Already a user? click here to <a href='/login'>login</a></h5>
      </div>
    </div>
  );
};

export default Register;
