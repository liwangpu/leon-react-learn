import React, { memo } from 'react';
import styles from './index.module.less';
import { Button } from 'antd';

const HOC: React.FC = memo(() => {

  const handleTest = () => {

  };

  return (
    <div className={styles['page']}>
      <div className={styles['page__header']}>
        <Button onClick={handleTest}>测试</Button>
      </div>
      <div className={styles['page__content']}>

      </div>
    </div>
  );
});

HOC.displayName = 'HOC';


export default HOC;