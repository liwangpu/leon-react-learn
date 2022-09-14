import { NavLink, Route, Routes } from 'react-router-dom';
import styles from './index.module.less';
import CounterByRedux from '../../components/CounterByRedux';
// import {  getUsersModule} from '../../stores/counterStore';

export default () => {

  return (
    <div className={styles['redux-test']}>
        <CounterByRedux />
      {/* <DynamicModuleLoader modules={[getUsersModule()]}>
      
      </DynamicModuleLoader> */}
    </div>
  );
}