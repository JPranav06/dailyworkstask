import React from 'react';
import { HarshRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import store from './App/store';
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
