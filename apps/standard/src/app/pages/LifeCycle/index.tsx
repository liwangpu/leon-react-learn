import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import styles from './index.module.less';



export default class LifeCycle extends React.PureComponent {

  title = 'top';
  constructor(props: any) {
    super(props);
    console.log(`${this.title} -- ctor`);
  }

  render(): React.ReactNode {
    console.log(`${this.title} -- render`);
    return (
      <div className={styles['life-cycle']} >
        <div className={styles['header']}>
          {/* <button onClick={() => setTitle(faker.name.fullName())}>切换标题</button>
        <button onClick={() => setCardState(!cardState)}>切换Card显隐状态</button> */}
        </div>
        <div className={styles['content']}>

        </div>
      </div>
    );
  }

}