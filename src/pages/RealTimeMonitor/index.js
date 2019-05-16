import React from 'react';
import { View, Text,ScrollView } from 'react-native';
import { withApollo } from 'react-apollo';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import { Button } from '@ant-design/react-native';
import Color from '../../theme/color'
import {Icon} from '@ant-design/react-native';

@connect(({ app,report,monitor }) => ({
    app,
    report,
    monitor
}))
class MonitorScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const {navigate} = navigation;
        return ({
            title:'实时监控',
            headerStyle:{
                backgroundColor: Color.brand.primary
            },
            headerTitleStyle:{
                color: Color.background,
                fontWeight: 'normal',
                textAlign: 'center',
                fontSize: 16,
                flex:1
            },
            headerRight: (
                <Icon
                    name={'message'}
                    size={22}
                    onPress={()=>{navigate('Msg')}}
                    style={{marginRight:15}}
                />
            ),
            headerLeft: (
                <Icon
                    name={'user'}
                    size={22}
                    onPress={()=>{navigate('User')}}
                    style={{marginLeft:15}}
                />
            ),
        })
    };

    componentDidMount(){
        const {dispatch} = this.props 
        dispatch({
            type: 'app/query'
        })
        dispatch({
            type: 'report/query'
        })
        dispatch({
            type: 'monitor/query'
        })
        
    }

    render() {
        const {app:{data},report,monitor} = this.props
        console.log(data,'==data==')
        console.log(report,'report==')
        console.log(monitor,'monitor==')
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>实时监控</Text>
                <Button onPress={()=>this.props.navigation.navigate('Login')}>Login</Button>
                <Button onPress={()=>this.props.navigation.navigate('MonitorDetail')}>MonitorDetail</Button>
                <ScrollView>
                    {monitor.data && monitor.data.map(v=><Text key={`${v.customer_id}_${v.date}`}>{v.customer_id}-{v.customer_name}-{v.date}</Text>)}
                </ScrollView>
            </View>
        );
    }
}

export default withApollo(MonitorScreen)