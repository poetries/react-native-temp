import {Dimensions } from 'react-native';
import Toast from 'react-native-root-toast';

export { NavigationActions, StackActions } from 'react-navigation'

export { default as Storage } from './Storage'

export const delay = time => new Promise(resolve => setTimeout(resolve, time))

export const createAction = type => payload => ({ type, payload })

export default {
    screenW: Dimensions.get('window').width,//手机屏幕宽度
    screenH: Dimensions.get('window').height,//手机屏幕高度
}

export const showMsg = msg=>Toast.show(msg, {
    duration: Toast.durations.LONG,
    position: Toast.positions.TOP,
    backgroundColor: '#595959',
    textColor: '#fff',
    shadow: false,
    animation: true,
    hideOnPress: true,
    delay: 0
  })


  let rvalidchars = /^[\],:{}\s]*$/
  let rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g
  let rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g
  let rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g
  
  //解析非标准json、JSON.parse不能格式化的
export const parseJSON = function( data ) {
      if ( data === null ) {
          return data;
      }
  
      if ( typeof data === "string" ) {
          if ( data ) {
              // Make sure the incoming data is actual JSON
              // Logic borrowed from http://json.org/json2.js
              if ( rvalidchars.test( data.replace( rvalidescape, "@" )
                  .replace( rvalidtokens, "]" )
                  .replace( rvalidbraces, "" ) ) ) {
  
                  return ( new Function( "return " + data ) )();
              }
          }
      }
  }
