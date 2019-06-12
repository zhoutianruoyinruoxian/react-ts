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
    path: '/DesignPatterns',
    text: '设计模式',
    icon: 'team',
    children: [
      {
        path: '/ObserverMode',
        text: '观察者模式',
      },
    ]
  },
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
  {
    path: '/DataStructure',
    text: '数据结构',
    icon: 'solution',
    children: [
      {
        path: '/Graph',
        text: '图',
      },
    ]
  },
];

export default menuList;
