import React from 'react';
import styles from './index.module.less';
import Parent from '../../components/Parent';
import { faker } from '@faker-js/faker';

type DynamicTestState = {
  value?: string;
  showParent?: boolean;
}

export default class DynamicTest extends React.Component<any, DynamicTestState> {

  constructor(props: any) {
    super(props);
    this.changeState = this.changeState.bind(this);
    this.toggleParentVisible = this.toggleParentVisible.bind(this);
    this.state = { showParent: true, value: 'default' };
  }

  changeState(): void {
    this.setState({ value: faker.random.words(2) });
  }

  toggleParentVisible(): void {
    this.setState({ showParent: !this.state.showParent });
  }

  render(): React.ReactNode {
    return (
      <div className={styles['hierarchy']}>
        <div className={styles['header']}>
          <p>Hierarchy</p>
          <button onClick={this.changeState}>更新状态</button>
          <button onClick={this.toggleParentVisible}>切换Parent显隐</button>
        </div>
        <div className={styles['content']}>
          {this.state.showParent && <Parent />}
          {/* <Parent title='P2' key="p2" /> */}
        </div>
      </div>
    );
  }
}
