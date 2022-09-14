import React, { useState, useEffect } from 'react';
import styles from './index.module.less';
import FullLifeCycle from '../FullLifeCycle';

export default () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`effect work:`,);

    return () => {
      console.log(`counter destroy`);
    };
  });
  return (
    <div className={styles['counter']}>
      <div className={styles['header']}>
        <button onClick={() => setCount(count + 1)}>点击</button>
      </div>
      <div className={styles['content']}>
        <p>当前点击了{count}次</p>
        {/* <FullLifeCycle /> */}
      </div>
    </div>
  );
}