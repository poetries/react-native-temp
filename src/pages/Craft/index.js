import React from 'react';
import { View, Text, Button,ScrollView } from 'react-native';
import { gql } from 'apollo-boost';
import { withApollo } from 'react-apollo';
import { connect } from 'react-redux';
import { Query } from "react-apollo";
import { StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Color from '../../theme/color'

@connect(({ app,report }) => ({
    report
}))
class CraftScreen extends React.Component {
    static navigationOptions = {
        title:'工艺',
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