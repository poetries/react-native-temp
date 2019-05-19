import React from 'react';
import { View, Text } from 'react-native';
import { withApollo } from 'react-apollo';
import { connect } from 'react-redux';
import { Actions, Scene } from 'react-native-router-flux';
import { Button } from '@ant-design/react-native';
import {Icon} from '@ant-design/react-native';

@connect(({ app }) => {
    return app;
})
class MonitorDetailScreen extends React.Component {

    componentDidMount(){

    }

    render() {
        console.log(this.props)
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>详情页</Text>
                <Button onPress={()=>Actions.pop()}>返回</Button>
            </View>
        );
    }
}

export default withApollo(MonitorDetailScreen)