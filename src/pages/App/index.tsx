import './index.less';
import { FileOutlined } from '@ant-design/icons';
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
];

export default () => {

  const routerLinks = () => routes.map(r => (
    <NavLink key={r.title} to={r.path} className="item">
      <FileOutlined className='icon' />
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