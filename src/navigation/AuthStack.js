import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, TextInput,Alert,TouchableOpacity } from 'react-native';
import { 
    createStackNavigator, 
    createBottomTabNavigator,
    StackNavigator,
    createDrawerNavigator,
    createSwitchNavigator
} from 'react-navigation'; // Version can be specified in package.json
import appConfig from '../theme/styles'

import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgetPwd from '../pages/ForgetPwd';

// 身份验证
export default createStackNavigator({ 
    Login: {
      screen:Login,
      navigationOptions:()=>({
          title:'登录',
          ...appConfig.navbar,
      })
  },
  ForgetPwd:{
      screen:ForgetPwd,
      navigationOptions:()=>({
          title:'找回密码',
          ...appConfig.navbar,
          headerRight: <View/>
      })
  },
  Register:{
      screen:Register,
      navigationOptions:()=>({
          title:'注册',
          ...appConfig.navbar,
          headerRight: <View/>
      })
  },
 });