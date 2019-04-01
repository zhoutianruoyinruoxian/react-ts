const baseUrl = '/api/v0.1';

const permission = '/permission/';

export default {
  // checkLogin: { url: '/auth/info/', method: 'get', desc: '验证是否登录' },
  login: { url: baseUrl + '/auth/login/', method: 'get', desc: '登录' },
  getPermissionList: { url: baseUrl + permission, method: 'get', desc: '获取权限列表' },
  setPermissionList: { url: baseUrl + permission, method: 'post', desc: '添加权限列表' },
  application: { url: baseUrl + '/application/', method: 'get', desc: '获取应用列表' },
  element: { url: baseUrl + '/element/', method: 'get', desc: '获取页面元素' },
  getRole: { url: baseUrl + '/role/', method: 'get', desc: '获取用户列表' },
  
};
