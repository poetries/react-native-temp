import {createMaterialTopTabNavigator} from 'react-navigation';

import HomeScreen from '../pages/Demo/home';
import CraftScreen from '../pages/Demo/Craft';
import AnalyseScreen from '../pages/Demo/Analyse';
import MsgScreen from '../pages/Demo/Msg';
import UserScreen from '../pages/Demo/UserCenter';
import theme from '../theme/color'
import appConfig from '../config/appConfig'

export const HomeTabs = createMaterialTopTabNavigator({
    ActualTimeTechnology:{
        screen:MsgScreen,
        navigationOptions:{
            title:'实时',
        }
    },
    BasicInfo:{
        screen:CraftScreen,
        navigationOptions:{
            title:'工艺',
        }
    },
    BasicInfo3:{
        screen:MsgScreen,
        navigationOptions:{
            title:'消息',
        }
    },
    BasicInfo4:{
        screen:UserScreen,
        navigationOptions:{
            title:'用户',
        }
    }
},{
    ...appConfig.TopTabs,
    // initialRouteName: 'BasicInfo3',
})