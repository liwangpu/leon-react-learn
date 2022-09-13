import React, { LazyExoticComponent, Suspense } from 'react';
import './index.less';
import { FileOutlined } from '@ant-design/icons';
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

const HookLearn = React.lazy(() => import('../HookLearn'));
const DynamicTest = React.lazy(() => import('../DynamicTest'));
const SubRoute = React.lazy(() => import('../SubRoute'));
const Hierarchy = React.lazy(() => import('../Hierarchy'));

const routes: { title: string; path: string; component: LazyExoticComponent<any>; list?: boolean; }[] = [
  {
    title: 'Hook学习',
    path: 'hooks',
    list: true,
    component: React.lazy(() => import('../HookLearn'))
  },
  {
    title: '层级组件',
    path: 'hierarchy',
    list: true,
    component: React.lazy(() => import('../Hierarchy'))
  },
];

export default () => {

  const routerLinks = () => routes.filter(r => r.list).map(r => (
    <NavLink key={r.title} to={r.path} className="item">
      <FileOutlined className='icon' />
      <p>{r.title}</p>
    </NavLink >
  ));
  const routerRegistries = () => routes.map(r => (
    <Route key={r.title} path={r.path} element={
      <Suspense fallback={<div>Loading...</div>}>
        <r.component />
      </Suspense>
    } />
  ));

  return (
    <div className='tutorial-app'>
      <div className="navs">
        <p className="title">React学习</p>
        {routerLinks()}
      </div>
      <div className="page">
        <Routes>
          {routerRegistries()}
          <Route path="*" element={<Navigate to="/hooks" replace />} />
        </Routes>
      </div>
    </div>
  );
}