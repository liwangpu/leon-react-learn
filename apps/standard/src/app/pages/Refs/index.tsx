import React, { useState, useRef, memo } from 'react';
import { faker } from '@faker-js/faker';
import styles from './index.module.less';

const Refs: React.FC = memo(() => {

  const [title, setTitle] = useState('默认');
  const cardRef = useRef();
  const componentRef = useRef<{ getTitle: Function }>();

  const toggleVisible = () => {
    console.log(`ref:`, componentRef);
  };

  const registryRef = (el: any) => {
    console.log(`registry:`, el);
    componentRef.current = el;
  };

  const triggerMethod = () => {
    const title = componentRef.current?.getTitle();
    console.log(`com title:`, title);
  };

  return (
    <div className={styles['refs']}>
      <div className={styles['header']}>
        <button onClick={() => setTitle(faker.name.fullName())}>更新当前组件标题</button>
        <button onClick={triggerMethod}>获取子组件标题</button>
      </div>
      <div className={styles['content']}>
        <h3>当前组件标题: {title}</h3>
      </div>
    </div >
  );
});

export default Refs;
