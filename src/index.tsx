import ReactDOM from 'react-dom/client';
import React, { Suspense } from 'react';
import './index.less';
import 'antd/dist/antd.less';
import App from './pages/App';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './reduxStore';

const Hook = React.lazy(() => import(/* webpackPrefetch:true */'./pages/Hook'));
const HOC = React.lazy(() => import(/* webpackPrefetch:true */'./pages/HOC'));
const Redux = React.lazy(() => import(/* webpackPrefetch:true */'./pages/Redux'));
const Hierarchy = React.lazy(() => import(/* webpackPrefetch:true */'./pages/Hierarchy'));
const Counter = React.lazy(() => import(/* webpackPrefetch:true */'./pages/Counter'));
const ConfigPanel = React.lazy(() => import(/* webpackPrefetch:true */'./pages/ConfigPanel'));
const Context = React.lazy(() => import(/* webpackPrefetch:true */'./pages/Context'));
const LifeCycle = React.lazy(() => import(/* webpackPrefetch:true */'./pages/LifeCycle'));

function WrapperSuspense(WrappedComponent: React.ComponentType) {
  return (
    <Suspense fallback={<div></div>}>
      <WrappedComponent />
    </Suspense>
  )
}

const router = createBrowserRouter([
  {
    path: "app",
    element: <App />,
    children: [
      {
        path: 'hooks',
        element: WrapperSuspense(Hook)
      },
      {
        path: 'hoc',
        element: WrapperSuspense(HOC)
      },
      {
        path: 'redux',
        element: WrapperSuspense(Redux),
        children: [
          {
            path: 'counter',
            element: WrapperSuspense(Counter)
          },
          {
            path: 'computer-config-panel',
            element: WrapperSuspense(ConfigPanel)
          },
          {
            index: true,
            element: <Navigate to="counter" replace />,
          },
        ]
      },
      {
        path: 'hierarchy',
        element: WrapperSuspense(Hierarchy)
      },
      {
        path: 'context',
        element: WrapperSuspense(Context)
      },
      {
        path: 'life-cycle',
        element: WrapperSuspense(LifeCycle)
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to="/app/hooks" replace />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// const store = StoreManager.getInstance().createStore({
//   devTools: true
// });

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

