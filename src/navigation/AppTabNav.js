import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, TextInput,Alert,TouchableOpacity } from 'react-native';
import { 
    createStackNavigator, 
    createBottomTabNavigator,
    StackNavigator,
    createDrawerNavigator,
    createSwitchNavigator
} from 'react-navigation'; // Version can be specified in package.json
import { Icon } from '@ant-design/react-native';
import appConfig from '../theme/styles'
import Color from '../theme/color'

import HomeScreen from '../pages/Demo/home';
import CraftScreen from '../pages/Demo/Craft';
import AnalyseScreen from '../pages/Demo/Analyse';
import MsgScreen from '../pages/Demo/Msg';
import UserScreen from '../pages/Demo/UserCenter';

export default createBottomTabNavigator(
    {
        Monitor: {
            screen:createStackNavigator({
                screen:HomeScreen,
            }),
            navigationOptions: {
                tabBarLabel: '实时',
                tabBarIcon:({focused,horizontal,tintColor})=>{
                    return <Icon
                    name={'compass'}
                    size={24}
                    color={tintColor}
                />
                }
            }
        },
        Craft: {
            screen:createStackNavigator({
                screen:CraftScreen,
            }),
            navigationOptions: {
                tabBarLabel: '工艺',
                tabBarIcon: ({tintColor, focused }) => (
                    <Icon
                        name={'bar-chart'}
                        size={24}
                        color={tintColor}
                    />
                ),
            }
        },
        Anylse: {
            screen:createStackNavigator({
                screen:AnalyseScreen,
            }),
            navigationOptions: {
                tabBarLabel: '分析',
                tabBarIcon: ({tintColor, focused }) => (
                    <Icon
                        name={'dashboard'}
                        size={24}
                        color={tintColor}
                    />
                ),
            }
        },
        Msg: {
            screen:createStackNavigator({
                screen:MsgScreen,
            }),
            navigationOptions: {
                tabBarLabel: '消息',
                tabBarIcon: ({tintColor, focused }) => (
                    <Icon
                        name={'message'}
                        size={24}
                        color={tintColor}
                    />
                ),
            }
        },
        User: {
            screen:createStackNavigator({
                screen:UserScreen,
            }),
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({tintColor, focused }) => (
                    <Icon
                        name={'user'}
                        size={24}
                        color={tintColor}
                    />
                ),
            }
        },
    },
    {
        animationEnabled: true,
         //是否可以滑动切换
        swipeEnabled: true,
        //切换是否有动画
        animationEnabled: true,
        initialRouteName: 'Monitor', // 设置默认的页面
        lazy:true,// 是否在app打开的时候将底部标签栏全部加载
        tabBarOptions:{
            activeTintColor: Color.brand.primary, // 选中时tab的label/icon的颜色
            // inactiveTintColor: '', // 未选中的颜色
            labelStyle: { // TabBar内单独tab的文字样式
                fontSize: 12,
            },
            showLabel: true,
            showIcon: true,
            style:{// 整体TabBar的样式
                borderTopWidth: 1,
                borderTopColor: '#eee'
            },
        }
    }
)