import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import App from './app/app';

const Hook = React.lazy(() => import('./app/pages/Hook'));
const HOC = React.lazy(() => import('./app/pages/HOC'));
const Context = React.lazy(() => import('./app/pages/Context'));
const LifeCycle = React.lazy(() => import('./app/pages/LifeCycle'));
const Refs = React.lazy(() => import('./app/pages/Refs'));

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
        path: 'hook',
        element: (
            <Hook />
        ),
      },
      {
        path: 'hoc',
        element: WrapperSuspense(HOC)
      },
      {
        path: 'context',
        element: WrapperSuspense(Context)
      },
      {
        path: 'refs',
        element: WrapperSuspense(Refs)
      },
      {
        path: 'life-cycle',
        element: WrapperSuspense(LifeCycle)
      },
      {
        index: true,
        element: <Navigate to="hook" replace={true} />,
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
