import React from 'react';
import './index.css';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from '../Home';
import About from '../About';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='app'>
        <h1>Welcome to React Router!</h1>
        <Link to="/">home</Link>
        <Link to="/about">About</Link>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
        </Routes>
      </div>
    );
  }
}