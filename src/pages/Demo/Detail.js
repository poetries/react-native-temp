import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from '@ant-design/react-native';
import {Icon} from '@ant-design/react-native';
import appConfig from '../../theme/styles'

@connect(({ app }) => {
    return app;
})
class MonitorDetailScreen extends React.Component {

    static navigationOptions = ({ navigation, navigationOptions }) => {
        const {navigate} = navigation;
        return {
          title: navigation.getParam('title'),
          // headerRight: <HeaderRight onPress={navigation.state.params?navigation.state.params.iconPress:null}/>,
          ...appConfig.navbar
        }
      };
    constructor(props) {
        super(props);
    
        this.state = {
         
        };
      }
    componentDidMount(){

    }

    render() {
        const {navigation} = this.props 
        
        console.log(this.props)
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>详情页</Text>
                <Button onPress={()=>navigation.goBack()}>返回</Button>
            </View>
        );
    }
}

export default MonitorDetailScreen