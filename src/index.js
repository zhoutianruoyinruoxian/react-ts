import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import 'src/style/index.scss';
import route from './routes/route-index';
import {register} from './serviceWorker';
import store, { reducers } from 'src/redux';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'src/config/globalConfig';
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
  const Router = route(store);
  ReactDOM.render(
    <Provider store={store}>
      <LocaleProvider locale={zhCN}>
        {Router}
      </LocaleProvider>
    </Provider>
    , document.getElementById('root')
  );
};

// if (process.env.NODE_ENV !== 'production' && module.hot) {
//   module.hot.accept('./routes/route-index.jsx', renderApp);
// }
renderApp();
register();
