import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import appConfig from '../../theme/styles'

@connect(({ app }) => {
    return app;
})
class MsgScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const {navigate} = navigation;
        return {
          headerTitle: '消息',
          drawerLabel: 'Home',
          // headerRight: <HeaderRight onPress={navigation.state.params?navigation.state.params.iconPress:null}/>,
          ...appConfig.navbar
        }
      };
    constructor(props) {
        super(props);
    
        this.state = {
         
        };
      }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>消息</Text>
            </View>
        );
    }
}

export default MsgScreen