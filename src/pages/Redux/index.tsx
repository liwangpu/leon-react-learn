import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './index.module.less';
import ConfigPanel from '../ConfigPanel';

export default function Redux(props: any): JSX.Element {
  // const [count, setCount] = useState(1);
  // const test = () => {
  //   setCount(count + 1);
  //   console.log(`title:`,);
  // }
  return (
    <div className={styles['redux']}>
      {/* <button onClick={test}>测试</button> */}
      <div className={styles['navs']}>
        <NavLink to='/app/redux/counter' className={styles['item']}>
          <p>Counter</p>
        </NavLink >
        <NavLink to='/app/redux/computer-config-panel' className={styles['item']}>
          <p>Computer Config Panel</p>
        </NavLink >
      </div>
      <div className={styles['content']}>
        {/* <ConfigPanel/> */}
        <Outlet />
      </div>
    </div>
  );
}