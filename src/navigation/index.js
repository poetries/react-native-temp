import { 
    createStackNavigator, 
    createSwitchNavigator,
    createDrawerNavigator
} from 'react-navigation'; 

import appConfig from '../config/appConfig'

import AuthStack from './AuthStack'
import BottomTabStack from './BottomTabStack'
import AppStack from './AppStack'
import MyNotificationsScreen from '../pages/Demo/MyNotificationsScreen';

// 创建StackNavigator
const StackNavigator = createStackNavigator(
    {
        // 底部Tabs切换
        Main: {
            screen: BottomTabStack, 
            navigationOptions: ({  navigation }) => {
                return {
                    header: null
                }
            }
        },
        ...AppStack
    }, 
    {
        initialRouteName: 'Main',
        headerMode: 'screen'
    }
);

const DrawerNavigator = createDrawerNavigator({
  StackNavigator
},{
  ...appConfig.drawerOptions,
  //用于呈现抽屉内容的组件，例如导航项。收到navigation抽屉的道具。默认为DrawerItems
  //用于自定义
  contentComponent: MyNotificationsScreen,
})

// 创建应用总的路由栈
const AppNavigator = createStackNavigator({ DrawerNavigator }, {
  navigationOptions: {
      header: null // 隐藏状态栏
  }
})

export default createSwitchNavigator({
    App: AppNavigator,
    Auth: AuthStack
  },
  {
    initialRouteName: 'Auth',
})