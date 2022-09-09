import React from 'react';
import styles from './index.module.less';
import Children from '../Children';
import { faker } from '@faker-js/faker';

const pref = 'parent';

type ParentProp = {
  title: string;
}

type ParentState = {
  value?: string;
}

export default class Parent extends React.Component<ParentProp, ParentState> {

  constructor(props: ParentProp) {
    super(props);
    this.state = { value: 'from parent' };
    this.changeState = this.changeState.bind(this);
  }

  changeState(): void {
    this.setState({ value: faker.random.words(2) });
  }

  render(): React.ReactNode {
    console.log(`parent ${this.props.title}--render`);
    return (
      <div className={styles[pref]}>
        <p>Parent @ {this.props.title}</p>
        <button onClick={this.changeState}>更新状态</button>
        <div className={styles['children']}>
          <Children />
        </div>
      </div>
    );
  }
}
