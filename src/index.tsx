import ReactDOM from 'react-dom/client';
import React, { Suspense } from 'react';
import './index.less';
import 'antd/dist/antd.less';
import App from './pages/App';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './reduxStore';

const HookLearn = React.lazy(() => import('./pages/HookLearn'));
const HocLearn = React.lazy(() => import('./pages/HocLearn'));
const ReduxTest = React.lazy(() => import('./pages/ReduxTest'));
const Hierarchy = React.lazy(() => import('./pages/Hierarchy'));
const Counter = React.lazy(() => import('./pages/Counter'));
const PageList = React.lazy(() => import('./pages/ConfigPanel'));

function WrapperSuspense(WrappedComponent: React.ComponentType) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
        element: WrapperSuspense(HookLearn)
      },
      {
        path: 'hoc',
        element: WrapperSuspense(HocLearn)
      },
      {
        path: 'redux',
        element: WrapperSuspense(ReduxTest),
        children: [
          {
            path: 'counter',
            element: WrapperSuspense(Counter)
          },
          {
            path: 'computer-config-panel',
            element: WrapperSuspense(PageList)
          }
        ]
      },
      {
        path: 'hierarchy',
        element: WrapperSuspense(Hierarchy)
      },
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

