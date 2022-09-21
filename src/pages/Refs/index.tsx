import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { faker } from '@faker-js/faker';
import styles from './index.module.less';

export default function Hook(props: any): JSX.Element {

  const [cardVisible, setCardVisible] = useState(true);
  const cardRef = useRef();

  const toggleVisible = () => {
    // console.log(`cardRef:`, cardRef);
    setCardVisible(!cardVisible)
  };

  const registryRef = el => {
    console.log(`registry:`, el);
  };

  return (
    <div className={styles['refs']}>
      <div className={styles['header']}>
        <button onClick={toggleVisible}>切换卡片显隐</button>
      </div>
      <div className={styles['content']}>
        {/* {cardVisible && <div ref={cardRef}>卡片</div>} */}

        {cardVisible && <Card ref={cardRef} />}
      </div>
    </div >
  );
}

function Card(props: any, ref): JSX.Element {
  // console.log(`card props:`, props);

  
  return (
    <div>
      卡片
    </div>
  );
}

const CardWithRef = forwardRef(Card);

// Card.defaultProps = {
//   myTitle: '我是标题'
// };


