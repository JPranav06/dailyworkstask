import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../Features/userSLicer';
import { useNavigate } from 'react-router-dom';
import "./Home.css"


const Signout = () => {
  const user = useSelector((state) => state.user.user);
    
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
    navigate('/login');
  }
  if (!user) {
    return <div className='nouser'>You need to Login/Register before viewing this page <br></br>
    Click here to <a href='/login'>Login</a> or Click here to <a href='/'>Register</a> </div>; 
  }

  return (
    <div className='homepage'>
      <h1>Hello <span className='span2'>{user.name}</span> Welcome to the <span className='span1'>Home Page!</span></h1>
      <table className='table'>
        <thead>
          <tr className='tablerow'>
            <th>Email</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr className='tablerow'>
            <td><h3>{user.email}</h3></td>
            <td><h3>{user.name}</h3></td>
          </tr>
        </tbody>
      </table>

      <button className='signout-btn' onClick={(e) => handleLogout(e)}>SignOut</button>
    </div>
  );
};

export default Signout;