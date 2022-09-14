import { NavLink, Outlet } from 'react-router-dom';
import styles from './index.module.less';

export default () => {

  return (
    <div className={styles['redux-test']}>
      <div className={styles['navs']}>
        <NavLink to='/app/redux/counter' className={styles['item']}>
          <p>Counter</p>
        </NavLink >
        <NavLink to='/app/redux/page-list' className={styles['item']}>
          <p>Page List</p>
        </NavLink >
      </div>
      <div className={styles['content']}>
        <Outlet />
      </div>
    </div>
  );
}