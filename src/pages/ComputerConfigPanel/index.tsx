import React, { useState, useLayoutEffect } from 'react';
import { faker } from '@faker-js/faker';
import { withReducer } from '../../reduxStore';
import { useSelector, useDispatch } from 'react-redux';
import styles from './index.module.less';
import { Button } from 'antd';
import { store, addComputer, selectComputers, selectVersion, setVerion } from './computerStore';
import Computer from './computer';

function ComputerConfigPanel(props: any): JSX.Element {

  return (
    <div className={styles['computer-config-panel']}>
      <Version />
      {/* <Computer /> */}
    </div>
  );
}

function Version(props: any) {
  const version = useSelector(selectVersion);
  const dispatch = useDispatch();
  const changeVersion = () => {
    dispatch(setVerion(faker.datatype.uuid()));
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <p>版本:{version}</p>
      <Button type="primary" onClick={changeVersion}>修改版本</Button>
    </div>
  );
}

export default withReducer(store.name, store)(ComputerConfigPanel);