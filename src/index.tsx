import ReactDOM from 'react-dom/client';
import React, { LazyExoticComponent, Suspense } from 'react';
import './index.less';
import 'antd/dist/antd.less';
import App from './pages/App';
import { BrowserRouter, createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './reduxStore';

const HookLearn = React.lazy(() => import('./pages/HookLearn'));
const HocLearn = React.lazy(() => import('./pages/HocLearn'));
const ReduxTest = React.lazy(() => import('./pages/ReduxTest'));
const Hierarchy = React.lazy(() => import('./pages/Hierarchy'));

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
    // loader
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
        element: WrapperSuspense(ReduxTest)
      },
      {
        path: 'hierarchy',
        element: WrapperSuspense(Hierarchy)
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to="/app" replace />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
