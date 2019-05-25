import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, TextInput,Alert,TouchableOpacity } from 'react-native';
import { 
    createStackNavigator, 
    createBottomTabNavigator,
    StackNavigator,
    createDrawerNavigator,
    createSwitchNavigator
} from 'react-navigation'; 
import IconFeather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ThemeFlags} from '../theme/themeFactory'
import appConfig from '../config/appConfig'

import HomeScreen from '../pages/Demo/home';
import CraftScreen from '../pages/Demo/Craft';
import AnalyseScreen from '../pages/Demo/Analyse';
import MsgScreen from '../pages/Demo/Msg';
import UserScreen from '../pages/Demo/UserCenter';

export default createBottomTabNavigator(
    {
        Monitor: {
            screen:createStackNavigator({
                screen:HomeScreen
            }),
            navigationOptions: {
                tabBarLabel: '实时',
                tabBarIcon:({focused,horizontal,tintColor})=>{
                    return <IconFeather name={'monitor'} size={22} style={{color:tintColor}}/>
                }
            }
        },
        Craft: {
            screen:createStackNavigator({
                screen:CraftScreen,
            }),
            navigationOptions: {
                tabBarLabel: '工艺',
                tabBarIcon:({focused,horizontal,tintColor})=>{
                    return <Icon name={'object-ungroup'} size={20} style={{color:tintColor}}/>
                }
            }
        },
        Anylse: {
            screen:createStackNavigator({
                screen:AnalyseScreen
            }),
            navigationOptions: {
                tabBarLabel: '分析',
                tabBarIcon:({focused,horizontal,tintColor})=>{
                    return <IconFeather name={'bar-chart-2'} size={25} style={{color:tintColor}}/>
                }
            }
        },
        Msg: {
            screen:createStackNavigator({
                screen:MsgScreen,
            }),
            navigationOptions: {
                tabBarLabel: '消息',
                tabBarIcon:({focused,horizontal,tintColor,b})=>{
                    msg = 5;
                    return <View>
                            {msg>0?<Text style={styles.tip}>{msg}</Text>:null}
                         <IconFeather name={'message-circle'} size={22} style={{color:tintColor}}/>
                    </View>
                },
            }
        },
        User: {
            screen:createStackNavigator({
                screen:UserScreen,
            }),
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon:({focused,horizontal,tintColor})=>{
                    return <IconFeather name={'user'} size={22} style={{color:tintColor}}/>
                }
            }
        }
    },
    {
       ...appConfig.bottomTabs
    }
)

const styles = StyleSheet.create({
    tip:{
        color: '#fff',
        zIndex: 100,
        backgroundColor: ThemeFlags.Red,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 10,
        position: 'absolute',
        top: 0,
        right: -10
    }
})