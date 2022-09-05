import React from 'react';
import './index.css';
import { CustomContext } from '../custom-context';

console.log(`title:`, CustomContext);

export default class Clock extends React.Component {

  static contextType = CustomContext;

  constructor(props, context) {
    super(props);
    this.state = {
      start: false
    };
    // console.log(`clock ctor:`, this);
    // console.log(`ctor context:`, this.props);
    // console.log(`ctor context 1:`, context);
  }

  // componentDidMount() {
  // }

  // componentWillUnmount() {
  // }

  clockStart = () => {
    // console.log(`1:`, this);
    // this.setState({
    //   start: true
    // });
    // console.log(`clock:`, this);
    this.context.destroy();
  }

  render() {
    // console.log(`context:`, this.context);
    return (
      <div className='clock'>
        <div className='header'>
          <span>状态:{`${this.state.start}`}</span>
        </div>
        <div className='operation'>
          <button onClick={this.clockStart}>开始</button>
        </div>
      </div>
    );
  }
}