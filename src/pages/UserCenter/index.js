import React from 'react';
import { View, Text, Button } from 'react-native';
import { gql } from 'apollo-boost';
import { withApollo } from 'react-apollo';
import { connect } from 'react-redux';
import { Query } from "react-apollo";
import { StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Color from '../../theme/color'

@connect(({ app }) => {
    return app;
})
class UserCenterScreen extends React.Component {
    static navigationOptions = {
        title:'用户中心',
        headerStyle:{
            backgroundColor: Color.brand.primary
        },
        headerTitleStyle:{
            color: Color.background,
            fontWeight: 'normal',
            fontSize: 16,
            textAlign: 'center',
            flex:1
        }
      };
    render() {
        console.log(this.props, this.context)
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>用户中心</Text>
            </View>
        );
    }
}

export default withApollo(UserCenterScreen)