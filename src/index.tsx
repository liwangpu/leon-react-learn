import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.less';
import 'antd/dist/antd.less';
import App from './pages/App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { initializeStore } from './stores';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = initializeStore();

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
