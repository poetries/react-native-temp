import {Dimensions } from 'react-native';

export { NavigationActions, StackActions } from 'react-navigation'

export { default as Storage } from './Storage'

export const delay = time => new Promise(resolve => setTimeout(resolve, time))

export const createAction = type => payload => ({ type, payload })

export default {
    screenW: Dimensions.get('window').width,//手机屏幕宽度
    screenH: Dimensions.get('window').height,//手机屏幕高度
}