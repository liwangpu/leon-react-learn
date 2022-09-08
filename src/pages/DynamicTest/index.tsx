import React from 'react';
import styles from './index.module.less';
import { faker } from '@faker-js/faker';

const prefix = 'dynamic-test';

type DynamicTestState = {
  bodyComponents: any[];
}

export default class DynamicTest extends React.Component<any, DynamicTestState> {

  inputRef: React.RefObject<any>;
  constructor(props: any) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      bodyComponents: [
        { id: faker.datatype.uuid(), name: faker.name.fullName() },
        { id: faker.datatype.uuid(), name: faker.name.fullName() }
      ]
    };
    this.dynamicCreateCard = this.dynamicCreateCard.bind(this);
  }

  dynamicCreateCard(): void {
    const bodyComponents = [...this.state.bodyComponents];
    console.log(`state:`, this.state);
    // import('../../components/Card').then(m => {
    //   console.log(`m:`, m.default);
    //   const config = { id: faker.datatype.uuid(), name: faker.name.fullName() };
    //   // bodyComponents=[...bodyComponents,]
    //   bodyComponents.push(config);
    //   this.setState({ bodyComponents });
    // });
  }

  // cardItems(): React.ReactNode {
  //   // return this.state.bodyComponents.map(c=>)
  // }

  render(): React.ReactNode {
    return (
      <div className={styles[prefix]}>
        <button onClick={this.dynamicCreateCard}>点我加载</button>
        <div className="content">

        </div>
      </div>
    );
  }
}
