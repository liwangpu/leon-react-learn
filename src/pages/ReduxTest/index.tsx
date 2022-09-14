import { NavLink, Route, Routes } from 'react-router-dom';
import styles from './index.module.less';
import CounterByRedux from '../../components/CounterByRedux';

export default () => {

  return (
    <div className={styles['redux-test']}>
      <div className={styles['navs']}>
        <div className={styles['item']}>
          {/* <NavLink to='' className="item">
            <p>{r.title}</p>
          </NavLink > */}
        </div>
      </div>
      <div className={styles['content']}>

      </div>
      {/* <CounterByRedux /> */}
      {/* <DynamicModuleLoader modules={[getUsersModule()]}>
      
      </DynamicModuleLoader> */}
    </div>
  );
}