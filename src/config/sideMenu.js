import { Actions } from 'react-native-router-flux';

export const sideMenuConfig = [
    {
      title: 'Key排序',
      icon: 'sort',
      type: 'MaterialIcons',
      action: ()=>Actions.sortKey()
    },
    {
      title: '自定义Key',
      icon: 'restaurant-menu',
      type: 'MaterialIcons',
      action: ()=>Actions.customKey()
    },
    {
      title: '移除Key',
      icon: 'delete',
      type: 'MaterialCommunityIcons',
      action: ()=>Actions.removeKey()
    },
    {
      title: '自定义主题',
      icon: 'palette',
      type: 'MaterialIcons',
      action: ()=>Actions.customTheme()
    },
    {
      title: '关于作者',
      icon: 'person-pin',
      type: 'MaterialIcons',
      action: ()=>Actions.aboutAuthor()
    },
    {
      title: '反馈',
      icon: 'feedback',
      type: 'MaterialIcons',
      action: ()=>Actions.feedBack()
    },
    {
      title: '分享',
      icon: 'share',
      type: 'MaterialIcons',
      action: ()=>Actions.feedBack()
    }
  ]