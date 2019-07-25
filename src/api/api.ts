import { AxiosRequestConfig } from 'axios';

export interface ApiListItem extends AxiosRequestConfig {
  desc?: string;
}
export interface ApiList {
  [apiName: string]: ApiListItem;
}

const apiList: ApiList = {
  company: { url: '/api/company', method: 'get', desc: '测试' },
  api: { url: '/api', method: 'get', desc: '测试' },

};

export default apiList;