import React, { useState, useLayoutEffect } from 'react';
import { faker } from '@faker-js/faker';
import { withReducer } from '../../reduxStore';
import { useSelector, useDispatch } from 'react-redux';
import styles from './index.module.less';
import { Button } from 'antd';
import { store, addComputer, selectComputers } from './computerStore';
import Computer from '../../components/Computer';

function ConfigPanel(props: any): JSX.Element {

  const dispatch = useDispatch();
  const computers = useSelector(selectComputers);
  console.log(`computers:`, computers);


  const onAddComputer = () => {
    dispatch(addComputer(faker.datatype.uuid()));
  };

  const computerBasicItems = () => {

  };

  return (
    <div className={styles['page-list']}>
      <div className={styles['header']}>
        <Button type="primary" onClick={onAddComputer}>添加</Button>
      </div>
      <div className={styles['content']}>
        <div className={styles['computer']}>
          <div className={styles['basic']}>
            {/* <Computer /> */}
          </div>
          <div className={styles['config']}>

          </div>
        </div>
      </div>
    </div>
  );
}

export default withReducer(store.name, store)(ConfigPanel);