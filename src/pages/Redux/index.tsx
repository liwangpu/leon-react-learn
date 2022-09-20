import { NavLink, Outlet } from 'react-router-dom';
import styles from './index.module.less';

export default function Redux(props: any): JSX.Element {

  return (
    <div className={styles['redux']}>
      <div className={styles['navs']}>
        <NavLink to='/app/redux/counter' className={styles['item']}>
          <p>计数器</p>
        </NavLink >
        <NavLink to='/app/redux/computer-config-panel' className={styles['item']}>
          <p>电脑配置面板</p>
        </NavLink >
      </div>
      <div className={styles['content']}>
        <Outlet />
      </div>
    </div>
  );
}