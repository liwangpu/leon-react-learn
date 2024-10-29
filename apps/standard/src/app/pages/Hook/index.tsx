import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import React from 'react';
import styles from './index.module.less';

const Page: React.FC = observer(() => {


  const test = () => {

  };


  return (
    <div className={styles['page']}>

      <div className={styles['page__header']}>
        <Button onClick={test}>测试</Button>
      </div>

      <div className={styles['page__content']}>


      </div>

    </div>
  );
});

Page.displayName = 'Page';

export default Page;

