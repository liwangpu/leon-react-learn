import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import App from './app';

const Hook = React.lazy(() => import('./app/pages/Hook'));
const HOC = React.lazy(() => import('./app/pages/HOC'));
const MSTStore = React.lazy(() => import('./app/pages/MSTStore'));
const MST = React.lazy(() => import('./app/pages/MST'));

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
        element: WrapperSuspense(Hook)
      },
      {
        path: 'hoc',
        element: WrapperSuspense(HOC)
      },
      {
        path: 'mst',
        element: WrapperSuspense(MST)
      },
      {
        path: 'mst-store',
        element: WrapperSuspense(MSTStore)
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
