import React from 'react';
import { View, Text } from 'react-native';
import { withApollo } from 'react-apollo';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import { Button } from '@ant-design/react-native';
import Color from '../../theme/color'
import {Icon} from '@ant-design/react-native';

@connect(({ app }) => {
    return app;
})
class MonitorDetailScreen extends React.Component {

    componentDidMount(){

    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>实时监控</Text>
                <Button onPress={()=>this.props.navigation.navigate('Login')}>Login</Button>
            </View>
        );
    }
}

export default withApollo(MonitorDetailScreen)