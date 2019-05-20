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
class UserCenterScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const {navigate} = navigation;
        return {
          headerTitle: '用户中心',
          // headerRight: <HeaderRight onPress={navigation.state.params?navigation.state.params.iconPress:null}/>,
          ...appConfig.navbar
        }
      };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>用户中心</Text>
            </View>
        );
    }
}

export default withApollo(UserCenterScreen)