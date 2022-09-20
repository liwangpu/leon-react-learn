import './index.less';
import { ReadOutlined } from '@ant-design/icons';
import { NavLink, Outlet } from "react-router-dom";

const routes: { title: string; path: string }[] = [
  {
    title: 'Hook',
    path: '/app/hooks',
  },
  {
    title: 'HOC',
    path: '/app/hoc',
  },
  {
    title: 'Redux',
    path: '/app/redux'
  },
  {
    title: '层级组件',
    path: '/app/hierarchy'
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
    title: '组件更新',
    path: '/app/component-update'
  },
];

export default function App(props: any): JSX.Element {

  const routerLinks = () => routes.map(r => (
    <NavLink key={r.title} to={r.path} className="item">
      <ReadOutlined className='icon' />
      <p>{r.title}</p>
    </NavLink >
  ));

  return (
    <div className='tutorial-app'>
      <div className="navs">
        <p className="title">React学习</p>
        {routerLinks()}
      </div>
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
}