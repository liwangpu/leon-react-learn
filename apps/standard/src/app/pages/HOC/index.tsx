import React, { memo, useState } from 'react';
import { faker } from '@faker-js/faker';
import styles from './index.module.less';

const HOC: React.FC = memo(() => {

  const [cardVisible, setCardVisible] = useState(true);
  const [title, setTitle] = useState(faker.name.fullName());

  return (
    <div className={styles['hoc']}>
      <div className={styles['header']}>
        <button onClick={() => setCardVisible(!cardVisible)}>切换卡片显隐</button>
        <button onClick={() => setTitle(faker.name.fullName())}>切换标题</button>
      </div>
      <div className={styles['content']}>
        <p>{title}</p>
      </div>
    </div>
  );
});


export default HOC;