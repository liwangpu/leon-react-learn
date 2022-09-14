import React from 'react';
import styles from './index.module.less';
import { faker } from '@faker-js/faker';

type ChildrenProp = {
  value?: string;
}

type ChildrenState = {
  message?: string;
}

export default class Children extends React.Component<ChildrenProp, ChildrenState> {

  constructor(props: ChildrenProp) {
    super(props);
    this.state = { message: 'default' };
    this.changeState = this.changeState.bind(this);
  }

  changeState(): void {
    this.setState({ message: faker.random.words(2) });
  }

  // getSnapshotBeforeUpdate(props: any) {
  //   console.log(`children--getSnapshotBeforeUpdate`, props);
  // }

  componentDidMount(): void {
    console.log(`children--componentDidMount`);
  }

  componentDidUpdate(): void {
    console.log(`children--componentDidUpdate`);
  }

  render(): React.ReactNode {
    console.log(`children render`);
    return (
      <div className={styles['children']}>
        <p>Children {this.state.message}</p>
        <button onClick={this.changeState}>更新状态</button>
      </div>
    );
  }
}
