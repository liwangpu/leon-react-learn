import { Button } from 'antd';
import React, { memo, useState } from 'react';
import styles from './index.module.less';

const HOC: React.FC = memo(() => {

  return (
    <div className={styles['page']}>

    </div>
  );
});

HOC.displayName = 'HOC';

export default HOC;

