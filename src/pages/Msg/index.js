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
class MsgScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>消息</Text>
            </View>
        );
    }
}

export default withApollo(MsgScreen)