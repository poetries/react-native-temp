import React from 'react';
import { View, Text } from 'react-native';
import { withApollo } from 'react-apollo';
import { connect } from 'react-redux';
import { Actions, Scene } from 'react-native-router-flux';
import { Button } from '@ant-design/react-native';
import appConfig from '../../theme/styles'

@connect(({ app }) => {
    return app;
})
class AnalyseScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const {navigate} = navigation;
        return {
          headerTitle: '分析',
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
                <Text>分析</Text>
                <Text  style={{
                    fontSize:20,
                    color:'#888',
                    fontFamily:'iconfont'
                  }}>iconfont编码测试：{'\ue623'}</Text>
            </View>
        );
    }
}

export default withApollo(AnalyseScreen)