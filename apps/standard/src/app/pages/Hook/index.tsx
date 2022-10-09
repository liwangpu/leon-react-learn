import React, { useState, memo } from 'react';
import { faker } from '@faker-js/faker';
import styles from './index.module.less';

const Hook: React.FC = memo(() => {

  const [title, setTitle] = useState(faker.name.fullName());

  const test = () => {

  };

  return (
    <div className={styles['hook']}>
      <div className={styles['header']}>
        <button onClick={() => setTitle(faker.name.fullName())}>切换标题</button>
      </div>
      <div className={styles['content']}>
        <p>标题: {title}</p>
      </div>
    </div>
  );
});

export default Hook;
