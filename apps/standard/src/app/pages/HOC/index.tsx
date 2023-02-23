import React, { memo, useEffect, useLayoutEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import styles from './index.module.less';

const HOC: React.FC = memo(() => {

  return (
    <div className={styles['hoc']}>
      <div className={styles['container']}>
        <div className={styles['box']}>
          <div className={styles['menu']}></div>
        </div>
        <div className={styles['box']}>2</div>
        <div className={styles['box']}>3</div>
      </div>
    </div>
  );
});


export default HOC;