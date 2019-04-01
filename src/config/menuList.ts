interface MenuListItemBase {
  path: string;
  text: string;
  icon?: string;
}

interface MenuListItem {
  path: MenuListItemBase['path'];
  text: MenuListItemBase['text'];
  icon?: MenuListItemBase['icon'];
  children?: Array<MenuListItemBase>;
}

const menuList: Array<MenuListItem> = [
  {
    path: '/ComponentTest',
    text: '组件测试',
    icon: 'desktop',
    children: [
      {
        path: '/TableX',
        text: 'TableX',
      },
      {
        path: '/SelectSearch',
        text: 'SelectSearch',
      },
      {
        path: '/InputFormat',
        text: 'InputFormat',
      },
      {
        path: '/Step',
        text: 'Step',
      }
    ]
  },
  // {
  //   path: '/RoleManagement',
  //   text: '角色管理',
  //   icon: 'team',
  // },
  // {
  //   path: '/AuthorityManagement',
  //   text: '权限管理',
  //   icon: 'solution',
  // },
];

export default menuList;
