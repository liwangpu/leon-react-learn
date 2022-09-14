import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import styles from './index.module.less';
import { Button } from 'antd';

export default () => {

  const addPage = () => {

  };
  
  return (
    <div className={styles['page-list']}>
      <div className={styles['header']}>
        <Button type="primary" onClick={addPage}>添加</Button>
      </div>
      <div className={styles['content']}>

      </div>
    </div>
  );
}