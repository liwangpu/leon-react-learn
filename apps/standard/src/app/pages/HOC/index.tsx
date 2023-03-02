import React, { memo, useEffect, useLayoutEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import styles from './index.module.less';

const HOC: React.FC = memo(() => {

  return (
    <div className={styles['hoc']}>

    </div>
  );
});


export default HOC;