import { observer } from 'mobx-react-lite';
import React from 'react';
import styles from './index.module.less';

const HOC: React.FC = observer(() => {

  return (
    <div className={styles['page']}>

    </div>
  );
});

HOC.displayName = 'HOC';

export default HOC;

