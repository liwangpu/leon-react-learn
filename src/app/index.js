import React from 'react';
import './index.css';
import Clock from '../clock';
import Card from '../card';
import { faker } from '@faker-js/faker';
import { CustomContext } from '../custom-context';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    // console.log(`ctor:`, this.props);
    const clocks = [];

    for (let i = 0; i <= 5; i++) {
      const id = faker.datatype.uuid();
      const name = faker.name.fullName();
      clocks.push({
        id,
        name,
        destroy: () => { this.deleteClock(id) }
      });
    }
    this.state = {
      clocks
    };

    console.log(`title:`, this.state.clocks);
  }

  addClock = () => {
    return (
      <div>左边</div>
    );
  }

  deleteClock = (id) => {
    console.log(`delete clock:`, id);
  }

  clockList() {
    const clocks = this.state.clocks;
    return clocks.map(c => (<CustomContext.Provider value={c} key={c.id}>
      <Clock />
    </CustomContext.Provider>))
  }

  render() {
    const ctx = { name: 'Leon' };
    return (
      <div className="app">
        {/* <CustomContext.Provider value={ctx}>
          <Clock />
        </CustomContext.Provider> */}

        {/* {this.clockList()} */}

        <Card >
          <div>ksdjflsdf</div>
          <div>lsdfjlsdkfjdslfjdsfl</div>
        </Card>
      </div>
    );
  }
}

// exports.CustomContext = CustomContext;

