import React from 'react';
import styles from './index.module.less';
import { faker } from '@faker-js/faker';

type ChildrenProp = {

}

type ChildrenState = {
  title: string;
}

const componentName = 'full life cycle';

export default class FullLifeCycle extends React.Component<ChildrenProp, ChildrenState> {

  constructor(props: ChildrenProp) {
    super(props);
    this.state = { title: 'default' };
    this.changeTitle = this.changeTitle.bind(this);
    console.log(`${componentName}--ctor`);
  }

  changeTitle(): void {
    this.setState({ title: faker.random.words(2) });
  }

  // getSnapshotBeforeUpdate(props: any): JSX.Element {
  //   console.log(`children--getSnapshotBeforeUpdate`, props);
  // }

  componentDidMount(): void {
    console.log(`${componentName}--componentDidMount`);
  }

  componentDidUpdate(): void {
    console.log(`${componentName}--componentDidUpdate`);
  }

  componentWillUnmount(): void {
    console.log(`${componentName}--componentWillUnmount`);
  }

  render(): React.ReactNode {
    console.log(`${componentName}--render`);
    return (
      <div className={styles['life-cycle']}>
        <p>Full Life Cycle Work: {this.state.title}</p>
        <button onClick={this.changeTitle}>修改标题</button>
        <div className={styles['ipt-container']}>
          <input type="text" />
        </div>
      </div>
    );
  }
}
