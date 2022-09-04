import React from 'react';

export default class Clock extends React.Component {

  constructor(props) {
    super(props);
    console.log(`clock ctor:`,);
  }

  render() {
    return (
      <div className='clock'>
        <div className='header'>

        </div>
        <div className='operation'>
          <button >开始</button>
        </div>
      </div>
    );
  }
}