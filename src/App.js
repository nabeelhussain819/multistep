import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './Home';
import Navbar from './Components/Header/Navbar';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  const item = (localStorage.getItem('user'))
  const data = JSON.parse(item)
  return (
    <>
      <Navbar />
      <Routes>
        {item ?
          <>
            <Route path='/' exact element={<Home />} /></> :
          <>
            <Route path='/login' exact element={<Login />} />
            <Route path='/register' exact element={<Register />} />
          </>
        }


      </Routes>
    </>
  );
}

export default App;
