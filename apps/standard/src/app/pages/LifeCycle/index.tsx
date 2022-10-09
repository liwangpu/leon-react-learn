import React from 'react';
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
        </div>
        <div className={styles['content']}>

        </div>
      </div>
    );
  }

}