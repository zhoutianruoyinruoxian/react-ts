import axios from 'axios';
import isPlainObject from 'lodash-es/isPlainObject';
import apiList from './api.js';
import { defaultOption, didRequest, didRequestError } from './axios-config';

import { AxiosRequestConfig, AxiosPromise } from 'axios';


let customGlobalParams = {};
let customGlobalOptions = {};

type Method = 'GET' | 'POST' | 'PUT' | 'POST' | 'PATCH';

const isJsonFormat = (method: Method) => {
  return ['PUT', 'POST', 'PATCH'].findIndex(x => x === method) > -1;
};

export interface ApiFun {
  (params?: object, option?: AxiosRequestConfig): AxiosPromise
}

export interface Api {
  [apiName: string]: ApiFun
}

let api: Api = {};

const instance = axios.create(Object.assign({}, defaultOption, customGlobalOptions));

instance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

instance.interceptors.response.use(didRequest, didRequestError);

Object.keys(apiList).forEach(o => {
  api[o] = (params, option) => {
    let opts: AxiosRequestConfig = Object.assign({}, apiList[o], option);
    if (isJsonFormat((opts.method.toUpperCase() as Method))) {
      if (!isPlainObject(params)) {
        opts.data = params;
      } else {
        opts.data = Object.assign({}, customGlobalParams, params);
      }
    } else {
      opts.params = Object.assign({}, customGlobalParams, params);
    }
    return instance(opts);
  };
});

export default api;

export function setGlobalParams(params: object) {
  customGlobalParams = params;
};

export function setGlobalOptions(params: object) {
  customGlobalOptions = params;
};
