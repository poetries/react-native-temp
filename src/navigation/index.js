import React, { PureComponent } from 'react';
import { createStackNavigator, createBottomTabNavigator,StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import {
    createReduxContainer,
    createReactNavigationReduxMiddleware,
    createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { Text, View, StyleSheet, TextInput,Alert,TouchableOpacity } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';

import {Icon} from '@ant-design/react-native';
import Color from '../theme/color'

import HomeScreen from '../pages/Demo/home';
import DetailScreen from '../pages/Demo/Detail';
import CraftScreen from '../pages/Demo/Craft';
import AnalyseScreen from '../pages/Demo/Analyse';
import MsgScreen from '../pages/Demo/Msg';
import UserScreen from '../pages/Demo/UserCenter';
import Login from '../pages/Login';
import Register from '../pages/ForgetPwd';
import ForgetPwd from '../pages/ForgetPwd';

const AppTabNav = createBottomTabNavigator(
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
        lazy:true,
        tabBarOptions:{
            activeTintColor: Color.brand.primary,
            labelStyle: {
                fontSize: 12,
            },
            style:{
                borderTopWidth: 1,
                borderTopColor: '#eee'
            }
        }
    }
)

const AppNavigator = createStackNavigator(
    {
        Main: {
            screen: AppTabNav,
            navigationOptions: ({  navigation }) => {
                return {
                    header: null
                }
            }
        },
        // 注册信息
        Login:{
            screen:Login,
            navigationOptions:()=>({
                title:'登录',
                headerTitleStyle:{
                    alignSelf:'center',
                    textAlign: 'center',
                    flex:1,
                }
            })
        },
        ForgetPwd:{
            screen:ForgetPwd,
            navigationOptions:()=>({
                title:'找回密码',
                headerTitleStyle:{
                    alignSelf:'center',
                    textAlign: 'center',
                    flex:1,
                },
                headerRight: <View/>
            })
        },
        Register:{
            screen:Register,
            navigationOptions:()=>({
                title:'注册',
                headerTitleStyle:{
                    alignSelf:'center',
                    textAlign: 'center',
                    flex:1,
                },
                headerRight: <View/>
            })
        },
        // 监控详情
        MonitorDetail:{
            screen:DetailScreen,
            navigationOptions:()=>({
                title:'监控详情',
                headerTitleStyle:{
                    alignSelf:'center',
                    textAlign: 'center',
                    flex:1,
                },
                headerRight: <View/>
            })
        },
    }, 
    {
        initialRouteName: 'Main',
        headerMode: 'screen'
    }
);


export const routerReducer = createNavigationReducer(AppNavigator)

export const routerMiddleware = createReactNavigationReduxMiddleware(
    state => state.router,
    'root'
)

const App = createReduxContainer(AppNavigator, 'root')

@connect(({ app, router }) => ({ app, router }))
class Router extends PureComponent {
    render() {
        const { app, dispatch, router } = this.props
        // if (app.loading) return <Loading />
        return <App dispatch={dispatch} state={router} />
    }
}

export default Router;