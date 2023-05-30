import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import React from 'react';
import styles from './index.module.less';

const Hook: React.FC = observer(() => {

  const test = () => {

  };

  return (
    <div className={styles['page']}>

      <div className={styles['page__content']}>
        <Button onClick={test}>测试</Button>
      </div>

    </div>
  );
});

Hook.displayName = 'Hook';

export default Hook;

