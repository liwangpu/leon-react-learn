import React, { memo, useEffect, useLayoutEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import styles from './index.module.less';

const HOC: React.FC = memo(() => {

  useLayoutEffect(() => { 
    console.log(`host layout effect`,);
  }, []);

  useEffect(() => {
    console.log(`host effect`,);
  }, []);

  return (
    <div className={styles['hoc']}>
      <SimpleComponent />
      <br />
      <SimpleComponent1 />
    </div>
  );
});

const SimpleComponent: React.FC = props => {

  useLayoutEffect(() => { 
    console.log(`c1 layout effect`,);
  }, []);

  useEffect(() => {
    console.log(`c1 effect`,);
  }, []);

  return (
    <div>
      c1
    </div>
  );
}

const SimpleComponent1: React.FC = props => {

  useLayoutEffect(() => { 
    console.log(`c2 layout effect`,);
  }, []);

  useEffect(() => {
    console.log(`c2 effect`,);
  }, []);

  return (
    <div>
      c2
    </div>
  );
}


export default HOC;