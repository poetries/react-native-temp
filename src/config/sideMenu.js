import { Actions } from 'react-native-router-flux';

export const sideMenuConfig = [
    {
      title: 'Key排序',
      icon: 'sort',
      type: 'MaterialIcons',
      action: ()=>Actions.login()
    },
    {
      title: '自定义Key',
      icon: 'restaurant-menu',
      type: 'MaterialIcons',
      action: ()=>Actions.register()
    },
    {
      title: '移除Key',
      icon: 'delete',
      type: 'MaterialCommunityIcons',
      action: ()=>Actions.login()
    },
    {
      title: '自定义主题',
      icon: 'palette',
      type: 'MaterialIcons',
      action: ()=>Actions.register()
    },
    {
      title: '关于作者',
      icon: 'person-pin',
      type: 'MaterialIcons',
      action: ()=>Actions.login()
    },
    {
      title: '反馈',
      icon: 'feedback',
      type: 'MaterialIcons',
      action: ()=>Actions.login()
    },
    {
      title: '分享',
      icon: 'share',
      type: 'MaterialIcons',
      action: ()=>Actions.register()
    }
  ]