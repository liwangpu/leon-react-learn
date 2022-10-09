import React, { memo, useMemo, useState } from 'react';
import { faker } from '@faker-js/faker';
import styles from './index.module.less';
// import FullLifeCycle from '../../components/FullLifeCycle';
// import LoggerWrapper from '../../components/LoggerWrapper';

// const LifeCycleWithLogger=LoggerWrapper(FullLifeCycle);

const HOC: React.FC = memo(() => {
  // console.log(`props:`, props);
  const [cardVisible, setCardVisible] = useState(true);
  const [title, setTitle] = useState(faker.name.fullName());

  return (
    <div className={styles['hoc']}>
      <div className={styles['header']}>
        <button onClick={() => setCardVisible(!cardVisible)}>切换卡片显隐</button>
        <button onClick={() => setTitle(faker.name.fullName())}>切换标题</button>
        {/* <button onClick={() => setCardState(!cardState)}>切换Card显隐状态</button> */}
      </div>
      <div className={styles['content']}>
        <p>{title}</p>
        {/* <Counter /> */}
      </div>
    </div>
  );
});


export default HOC;