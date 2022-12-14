import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import 'antd/dist/antd.less';

import App from './app/app';
import { rootStore } from './app/store';

const Users = React.lazy(() => import('./app/pages/Users'));
const Robot = React.lazy(() => import('./app/pages/Robot'));

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
    element: <App store={rootStore} />,
    children: [
      {
        path: 'users',
        element: WrapperSuspense(Users),
      },
      {
        path: 'robot',
        element: WrapperSuspense(Robot),
      },
      {
        index: true,
        element: <Navigate to="robot" replace={true} />,
      }
    ]
  },
  {
    index: true,
    element: <Navigate to="/app" replace={true} />,
  },
  {
    path: '*',
    element: <Navigate to="/app" replace={true} />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router} />
);
