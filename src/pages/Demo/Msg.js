import React from 'react';
import { View, Text, Button } from 'react-native';
import { gql } from 'apollo-boost';
import { withApollo } from 'react-apollo';
import { connect } from 'react-redux';
import { Query } from "react-apollo";
import { Actions, Scene } from 'react-native-router-flux';
import appConfig from '../../theme/styles'

@connect(({ app }) => {
    return app;
})
class MsgScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const {navigate} = navigation;
        return {
          headerTitle: '消息',
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

export default withApollo(MsgScreen)