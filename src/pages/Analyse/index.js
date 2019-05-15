import React from 'react';
import { View, Text } from 'react-native';
import { withApollo } from 'react-apollo';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import { Button } from '@ant-design/react-native';
import Color from '../../theme/color'

@connect(({ app }) => {
    return app;
})
class AnalyseScreen extends React.Component {
     static navigationOptions = {
        title:'分析',
        headerStyle:{
            backgroundColor: Color.brand.primary
        },
        headerTitleStyle:{
            color: Color.background,
            fontWeight: 'normal',
            textAlign: 'center',
            fontSize: 16,
            flex:1
        }
      };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>分析</Text>
            </View>
        );
    }
}

export default withApollo(AnalyseScreen)