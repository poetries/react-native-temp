import React from 'react';
import { View, Text, Button,ScrollView,RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import appConfig from '../../theme/styles'

@connect(({ app }) => {
    return app;
})
class MsgScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const {navigate} = navigation;
        return {
          headerTitle: '消息',
          drawerLabel: 'Home',
          // headerRight: <HeaderRight onPress={navigation.state.params?navigation.state.params.iconPress:null}/>,
          ...appConfig.navbar
        }
      };
    constructor(props) {
        super(props);
    
        this.state = {
          refreshing:false
        };
      }
    render() {
        return (
            <ScrollView
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.refreshing}
                    titleColor="#03a9f4"
                    tintColor="#03a9f4"
                    colors={["#03a9f4"]}
                    // onRefresh={this._onRefresh}
                  />
                }
             >
                <Text>消息</Text>
            </ScrollView>
        );
    }
}

export default MsgScreen