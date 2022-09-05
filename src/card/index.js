import React from 'react';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    console.log(`card:`,this.props);
  }

  render() {
    return (
      <div className='card'>
        {this.props.children}
      </div>
    );
  }
}