import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import styles from './index.module.less';

export default function DynamicElement(props: any): JSX.Element {

  const [title, setTitle] = useState(faker.name.fullName());

  const generate = () => {
    // React.createElement();
  };

  // const Com = () => {
  //   return React.createElement(SimpleComponent);
  // };

  const comp = React.createElement(SimpleComponent);

  const compOwner=comp['_owner'];
  console.log(`comp:`,comp);
  console.log(`_owner:`, compOwner);
  console.log(`child:`, compOwner['child']);
  console.log(`keys:`, Object.keys(compOwner));

  return (
    <div className={styles['hook']}>
      <div className={styles['header']}>
        <button onClick={generate}>动态生成</button>
      </div>
      <div className={styles['content']}>
        {comp}
      </div>
    </div>
  );
}

const Wrapper=()=>Component=>{
  return 
}


function SimpleComponent(props: any): JSX.Element {

  return (
    <div>
      动态组件
    </div>
  );
}