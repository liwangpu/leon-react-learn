import { observer } from 'mobx-react-lite';
import React from 'react';
import styles from './index.module.less';

const Page: React.FC = observer(() => {

  return (
    <div className={styles['page']}>

      <div className={styles['page__header']}>

      </div>

      <div className={styles['page__content']}>

      </div>
    </div>
  );
});

Page.displayName = 'Page';

export default Page;

