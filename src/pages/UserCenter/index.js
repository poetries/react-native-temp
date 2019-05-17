import React from 'react';
import { View, Text, Button } from 'react-native';
import { gql } from 'apollo-boost';
import { withApollo } from 'react-apollo';
import { connect } from 'react-redux';
import { Query } from "react-apollo";
import { Actions, Scene } from 'react-native-router-flux';

@connect(({ app }) => {
    return app;
})
class UserCenterScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>用户中心</Text>
            </View>
        );
    }
}

export default withApollo(UserCenterScreen)