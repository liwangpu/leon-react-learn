import { NavLink, Route, Routes } from 'react-router-dom';
import styles from './index.module.less';

export default () => {

  return (
    <div className={styles['sub-route']}>
      <div className={styles['navs']}>
        <NavLink to="page1" className="item">
          <p>页面1</p>
        </NavLink >
        <NavLink to="page2" className="item">
          <p>页面2</p>
        </NavLink >
      </div>
      <div>
        {/* <Routes>
          <Route path="page1" element={
            <div>页面1</div>
          } />
          <Route path="page2" element={
            <div>页面2</div>
          } />
        </Routes> */}
      </div>
    </div>
  );
}