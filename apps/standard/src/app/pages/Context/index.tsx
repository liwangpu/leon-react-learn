import React, { useState, useContext, memo, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import styles from './index.module.less';

interface ContextAImplement {
  title: string;
}

const ContextA = React.createContext<ContextAImplement>(null);
const ContextB = React.createContext<string>(null);

const Context: React.FC = memo(() => {

  const [title, setTitle] = useState(faker.name.fullName());

  useEffect(() => {
    console.log(`title:`, title);
  }, []);

  return (
    <div className={styles['context']}>
      <div className={styles['header']}>
        <button onClick={() => setTitle(faker.name.fullName())}>切换标题</button>
        {/* <button onClick={() => setTitle(faker.name.fullName())}>切换标题</button>
        <button onClick={() => setCardState(!cardState)}>切换Card显隐状态</button> */}
      </div>
      <div className={styles['content']}>

      </div>
    </div>
  );
});

export default Context;

