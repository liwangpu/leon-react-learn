import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import styles from './index.module.less';

export default function Hook(props: any): JSX.Element {

  const [title, setTitle] = useState(faker.name.fullName());

  return (
    <div className={styles['hook']}>
      <div className={styles['header']}>
        <button onClick={() => setTitle(faker.name.fullName())}>切换标题</button>
      </div>
      <div className={styles['content']}>
        <p>{title}</p>
        <NestedComponent title={title} />
      </div>
    </div>
  );
}



function NestedComponent(props: { title: string }) {

  useEffect(() => {
    console.log(`work:`,);
  }, [props.title]);

  return (
    <div>
      <p>Nested Component</p>
      <p>{props.title}</p>
    </div>
  );
}