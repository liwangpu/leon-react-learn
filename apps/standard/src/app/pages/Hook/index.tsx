// import { Button } from 'antd';
import React, { memo, useEffect, useLayoutEffect, useState } from 'react';
import styles from './index.module.less';

const Hook: React.FC = memo(() => {

  const [val, setVal] = useState<boolean>();

  const handleTest = () => {
    setVal(true);
  };

  useLayoutEffect(() => {
    console.log(`hook layout`,);
  }, []);


  useEffect(() => {
    console.log(`hook effect`,);
  }, []);

  return (
    <div className={styles['page']}>
      <div className={styles['page__header']}>
        {/* <Button onClick={handleTest}>测试</Button> */}
      </div>
      <div className={styles['page__content']}>
        {val && <SimpleComponent />}
      </div>
    </div>
  );
});

Hook.displayName = 'Hook';


const SimpleComponent: React.FC = memo(props => {

  const [val, setVal] = useState<boolean>();

  useLayoutEffect(() => {
    console.log(`simple layout`,);
  }, []);

  useEffect(() => {
    console.log(`simple effect`,);
    (async () => {
      setTimeout(() => {
        setVal(true);
      }, 2000);
    })();
  }, []);

  return (
    <div>
      {val && (
        <div>天天开心</div>
      )}
    </div>
  );
});

SimpleComponent.displayName = 'SimpleComponent';

export default Hook;
