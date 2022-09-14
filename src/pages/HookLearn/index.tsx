import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import styles from './index.module.less';

export default () => {

  const [cardState, setCardState] = useState(true);
  const [title, setTitle] = useState(faker.name.fullName());

  return (
    <div className={styles['hook-learn']}>
      <div className={styles['header']}>
        <button onClick={() => setTitle(faker.name.fullName())}>切换标题</button>
        <button onClick={() => setCardState(!cardState)}>切换Card显隐状态</button>
      </div>
      <div className={styles['content']}>
        <p>{title}</p>
        {cardState && (
          <div>我是卡片</div>
        )}
      </div>
    </div>
  );
}