import React from 'react';
import styles from './index.module.less';
import Children from '../Children';
import { faker } from '@faker-js/faker';

type ParentProp = {
  title?: string;
}

type ParentState = {
  value?: string;
}

export default class Parent extends React.Component<ParentProp, ParentState> {

  constructor(props: ParentProp) {
    super(props);
    this.state = { value: '嘻嘻哈哈' };
    this.changeState = this.changeState.bind(this);
    console.log(`parent ${this.props.title}--ctor`);
  }

  changeState(): void {
    this.setState({ value: faker.random.words(2) });
  }

  render(): React.ReactNode {
    console.log(`parent ${this.props.title}--render`);
    return (
      <div className={styles['parent']}>
        <p>Parent @ {this.props.title}</p>
        <p>消息: {this.state.value}</p>
        <button onClick={this.changeState}>更新状态</button>
        <div className={styles['children']}>
          <Children />
        </div>
      </div>
    );
  }

  static getDerivedStateFromProps(props: ParentProp, state: ParentState): any {
    // console.log(`parent:`, props, state);
    return { value: '天天开心' };
  }
}
