import React, { Suspense } from 'react';
import './index.less';
import { FileOutlined } from '@ant-design/icons';
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

const HookLearn = React.lazy(() => import('../HookLearn'));
const DynamicTest = React.lazy(() => import('../DynamicTest'));
const SubRoute = React.lazy(() => import('../SubRoute'));
const Hierarchy = React.lazy(() => import('../Hierarchy'));

export default () => {

  return (
    <div className='tutorial-app'>
      <div className="navs">
        <p className="title">React学习</p>
        <NavLink to="dynamic-test" className="item">
          <FileOutlined className='icon' />
          <p>动态组件</p>
        </NavLink >
        <NavLink to="hierarchy" className="item">
          <FileOutlined className='icon' />
          <p>层级组件</p>
        </NavLink >
        <NavLink to="hooks" className="item">
          <FileOutlined className='icon' />
          <p>Hook</p>
        </NavLink >
        <NavLink to="sub-route" className="item">
          <FileOutlined className='icon' />
          <p>二级路由</p>
        </NavLink >
      </div>
      <div className="page">
        <Routes>
          <Route path="/hooks" element={
            <Suspense fallback={<div>Loading...</div>}>
              <HookLearn />
            </Suspense>
          } />
          <Route path="/dynamic-test" element={
            <Suspense fallback={<div>Loading...</div>}>
              <DynamicTest />
            </Suspense>
          } />
          <Route path="/hierarchy" element={
            <Suspense fallback={<div>Loading...</div>}>
              <Hierarchy />
            </Suspense>
          } />
          <Route path="/sub-route" element={
            <Suspense fallback={<div>Loading...</div>}>
              <SubRoute />
            </Suspense>
          } />
          <Route path="*" element={<Navigate to="/dynamic-test" replace />} />
        </Routes>
      </div>
    </div>
  );
}