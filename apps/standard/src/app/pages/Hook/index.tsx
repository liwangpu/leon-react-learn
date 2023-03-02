import { Button } from 'antd';
import React, { memo, useEffect } from 'react';
import styles from './index.module.less';

const Hook: React.FC = memo(() => {

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

Hook.displayName = 'Hook';

export default Hook;
