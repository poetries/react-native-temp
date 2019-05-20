import React from 'react';
import { View, Text, Button,ScrollView } from 'react-native';
import { gql } from 'apollo-boost';
import { withApollo } from 'react-apollo';
import {  ListItem,Header,Icon,Divider } from 'react-native-elements'
import { connect } from 'react-redux';
import { Query } from "react-apollo";
import { Actions, Scene } from 'react-native-router-flux';
import appConfig from '../../theme/styles'

@connect(({ app,report }) => ({
    report
}))
class CraftScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const {navigate} = navigation;
        return {
          headerTitle: '工艺',
          ...appConfig.navbar,
          headerLeft: <View style={{paddingLeft:10}}>
          <Icon
            name='menu'
            type='EvilIcons'
            color="#fff"
            underlayColor="#03a9f4"
            onPress={()=>navigate('Login')}
      />
      </View>,
      headerRight: <View style={{paddingRight:10}}>
            <Text  style={{fontSize:22,fontFamily:'iconfont',color:'#fff'}}>{'\ue656'}</Text>
      </View>
        }
      };
    componentDidMount(){
        const {dispatch} = this.props 
  
        dispatch({
            type: 'report/query'
        })
    }
    render() {
        const {report:{data=[]}} = this.props

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>工艺</Text>
                <ScrollView>
                    {data && data.map(v=><Text key={v.advertiser_id}>花费：{v.cost}</Text>)}
                </ScrollView>
            </View>
        );
    }
}

export default withApollo(CraftScreen)