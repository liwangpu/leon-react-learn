import './app.less';
import { NavLink, Outlet } from "react-router-dom";
import { ReadOutlined } from '@ant-design/icons';
import { memo } from 'react';

const routes: { title: string; path: string }[] = [
  {
    title: 'Hook',
    path: '/app/hook',
  },
  {
    title: 'HOC',
    path: '/app/hoc',
  },
  {
    title: 'Context',
    path: '/app/context'
  },
  {
    title: '生命周期',
    path: '/app/life-cycle'
  },
  {
    title: 'Refs',
    path: '/app/refs'
  },
];

const App = memo((props: any) => {
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
});

export default App;