import styles from './index.module.less';
import { memo, useMemo } from 'react';
import { INavItem, SimpleNavsPage } from '@react-learn/shared';

const App: React.FC = memo(() => {

  const routes = useMemo<Array<INavItem>>(() => ([
    {
      title: 'Users',
      path: '/app/users',
    },
    {
      title: 'Robot',
      path: '/app/robot',
    },
  ]), []);

  return (
    <div className={styles['tutorial-app']}>
      <SimpleNavsPage title='学习里程' routes={routes} />
    </div>
  );
});

export default App;