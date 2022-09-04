import React from 'react';
import './index.css';
import Clock from '../clock';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    // console.log(`ctor:`,);
  }

  render() {
    return (
      <div className="App">
        <Clock />
      </div>
    );
  }
}

