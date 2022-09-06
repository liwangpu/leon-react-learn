import React from 'react';
import './index.css';
import { Routes, Route, Link } from "react-router-dom";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log(`home props:`,this.props);
    return (
      <div className='home'>home</div>
    );
  }
}