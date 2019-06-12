import { createStore, compose, applyMiddleware } from 'redux';
import reducerCreater from './reducerCreater';
import mutationCreater from './mutationCreater';
import logger from './logger';


const defaultOption = {
  logger: false,
  middleware: [],
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeCreater = (modules, option = defaultOption) => {

  // 最好是在这里对modules做一次深拷贝

  if (!modules || Object.prototype.toString.call(modules) !== '[object Object]') {
    throw new Error('parameter modules is required but not found!');
  }
  let middleware = [];

  if (option.logger && logger) {
    middleware = [...defaultOption.middleware, logger];
  }

  const reducers = reducerCreater(modules);
  const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(...middleware)),
  );
  const mapMutations = mutationCreater(store, modules);
  return {
    store,
    mapMutations,
    reducers,
  };
};

export default storeCreater;
