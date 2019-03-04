import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import route from './routes/route-index.jsx';
import {register} from './serviceWorker';
import 'antd/dist/antd.css';
// import './style/index.scss';

import store, { reducers } from 'src/redux';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn'); // 设置moment全局语言

// const Router = route();
// ReactDOM.render(
//   <Provider store={store}>
//     {Router}
//   </Provider>
//   , document.getElementById('root'));

// if (process.env.NODE_ENV !== 'production' && module.hot) {
//   module.hot.accept('./redux', () => store.replaceReducer(reducers));
// }

const renderApp = () => {
  const Router = route();
  ReactDOM.render(
    <Provider store={store}>
      {Router}
    </Provider>,
    document.getElementById('root')
  );
};
// if (process.env.NODE_ENV !== 'production' && module.hot) {
//   module.hot.accept('./routes/route-index.jsx', renderApp);
// }
renderApp();
register();
