import './app.less';
import { NavLink, Outlet } from "react-router-dom";
import { ReadOutlined } from '@ant-design/icons';
import { memo } from 'react';
import { observer } from 'mobx-react-lite';
import { Instance } from 'mobx-state-tree';
import { RootStore } from './store';

const routes: { title: string; path: string }[] = [
  {
    title: 'Users',
    path: '/app/users',
  },
];




function App({ store }: { store: Instance<typeof RootStore> }): JSX.Element {
  const routerLinks = () => routes.map(r => (
    <NavLink key={r.title} to={r.path} className={({ isActive }) => isActive ? "item actived" : "item"}>
      <ReadOutlined className='icon' />
      <p>{r.title}</p>
    </NavLink >
  ));
  return (
    <div className='tutorial-app'>
      <div className="navs">
        <div className="header">
          <p className='title'>学习里程</p>
        </div>
        <div className="content">
          {routerLinks()}
        </div>
      </div>
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
}

export default memo(observer(App));