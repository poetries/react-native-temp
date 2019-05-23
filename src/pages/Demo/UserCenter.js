import React from 'react';
import { View, Text, Button,AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
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

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>用户中心</Text>
                <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
            </View>
        );
    }
}

export default UserCenterScreen