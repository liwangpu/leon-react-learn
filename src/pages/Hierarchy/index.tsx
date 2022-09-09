import React from 'react';
import styles from './index.module.less';
import Parent from '../../components/Parent';
import { faker } from '@faker-js/faker';

type DynamicTestState = {

}

export default class DynamicTest extends React.Component<any, DynamicTestState> {

  constructor(props: any) {
    super(props);
    this.changeState = this.changeState.bind(this);
  }

  changeState(): void {
    this.setState({ value: faker.random.words(2) });
  }

  render(): React.ReactNode {
    return (
      <div className={styles['hierarchy']}>
        <div className={styles['header']}>
          <p>Hierarchy</p>
          <button onClick={this.changeState}>更新状态</button>
        </div>
        <div className={styles['content']}>
          <Parent title='P1' key="p1" />
          {/* <Parent title='P2' key="p2" /> */}
        </div>
      </div>
    );
  }
}
