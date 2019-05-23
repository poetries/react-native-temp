import { AppRegistry } from 'react-native'
import App from './src/index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

console.disableYellowBox = true // 关闭全部黄色警告
console.ignoredYellowBox = [
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Warning: componentWillUpdate is deprecated',
    'Warning: isMounted(...) is deprecated',
]
