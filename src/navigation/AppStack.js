import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, TextInput,Alert,TouchableOpacity } from 'react-native';
import appConfig from '../theme/styles'
import DetailScreen from '../pages/Demo/Detail';

// App页面内相关screen
export default {
     MonitorDetail:{
        screen:DetailScreen,
        navigationOptions:()=>({
            ...appConfig.navbar,
            headerRight: <View/>
        })
    },
}