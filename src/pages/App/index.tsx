import React from 'react';
import styles from './index.module.less';
import { FileOutlined, FormOutlined } from '@ant-design/icons';
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import HookLearn from '../HookLearn';
import RefLearn from '../RefLearn';

type AppState = {

}

export default class App extends React.Component<AppState> {

  constructor(props: AppState) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className={styles.App}>
        {/* <div className="navbar">
          <NavLink to="refs" className="nav">
            <span>Refs</span>
          </NavLink >
          <NavLink to="hooks" className="nav">
            <span>Hook</span>
          </NavLink >
        </div>
        <div className="content">
          <Routes>
            <Route path="/hooks" element={<HookLearn />} />
            <Route path="/refs" element={<RefLearn />} />
            <Route path="*" element={<Navigate to="/refs" replace />} />
          </Routes>
        </div> */}

        <div className="navs">
          <p className="title">React学习</p>
          <NavLink to="refs" className="item">
            <FileOutlined className='icon' />
            <p>Ref</p>
          </NavLink >
          <NavLink to="hooks" className="item">
            <FileOutlined className='icon' />
            <p>Hook</p>
          </NavLink >
        </div>
        <div className="page">
          <Routes>
            <Route path="/hooks" element={<HookLearn />} />
            <Route path="/refs" element={<RefLearn />} />
            <Route path="*" element={<Navigate to="/refs" replace />} />
          </Routes>
        </div>
      </div>
    );
  }
}