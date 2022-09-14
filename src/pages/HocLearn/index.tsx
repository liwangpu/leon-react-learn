import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import styles from './index.module.less';
import Counter from '../../components/Counter';
// import FullLifeCycle from '../../components/FullLifeCycle';
// import LoggerWrapper from '../../components/LoggerWrapper';

// const LifeCycleWithLogger=LoggerWrapper(FullLifeCycle);

export default () => {

  // const [cardState, setCardState] = useState(true);
  // const [title, setTitle] = useState(faker.name.fullName());

  return (
    <div className={styles['hoc-learn']}>
      <div className={styles['header']}>
        {/* <button onClick={() => setTitle(faker.name.fullName())}>切换标题</button>
        <button onClick={() => setCardState(!cardState)}>切换Card显隐状态</button> */}
      </div>
      <div className={styles['content']}>
        <Counter />
      </div>
    </div>
  );
}