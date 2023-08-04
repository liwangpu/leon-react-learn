import styles from './index.module.less';
import { memo, useMemo } from 'react';
import { INavItem, SimpleNavsPage } from '@react-learn/shared';

const App: React.FC = memo(() => {

  const routes = useMemo<Array<INavItem>>(() => ([
    {
      title: 'Hook',
      path: '/app/hook',
    },
    {
      title: 'HOC',
      path: '/app/hoc',
    },
    {
      title: 'MST',
      path: '/app/mst',
    },
    {
      title: 'MST Store',
      path: '/app/mst-store',
    },
  ]), []);

  return (
    <div className={styles['tutorial-app']}>
      <SimpleNavsPage title='学习里程' routes={routes} />
    </div>
  );
});

export default App;