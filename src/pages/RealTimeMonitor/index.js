import React from 'react';
import { View, Text,ScrollView } from 'react-native';
import { withApollo } from 'react-apollo';
import { connect } from 'react-redux';
import { Actions, Scene } from 'react-native-router-flux';
import { Button } from '@ant-design/react-native';
// import {Icon} from '@ant-design/react-native';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'
import { List, ListItem,Header,Icon } from 'react-native-elements'
// import queryKeys from '../../config/queryKeys.json'
// import TabView from '../../components/tabs/TabView'
// import SideMenu from '../../components/sideMenu/SideMenu'
// import Drawer from 'react-native-drawer'

@connect(({ app,report,monitor,roles }) => ({
    app,
    report,
    monitor,
    roles
}))
class MonitorScreen extends React.Component {
    static componentName = 'monitor';
    state = {
        visible: true,
        isOpen:false,
        theme: '#03a9f4'
    }
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
        // this.props.navigation.dispatch({
        //     type: 'roles/query'
        // })
    }

    renderHeader = ()=>{
        return <Header
        leftComponent={
          <Icon
          name='menu'
          type='EvilIcons'
          color="#fff"
          underlayColor="#03a9f4"
          onPress={()=>this._drawer.open()}
        />
        }
        centerComponent={{ text: '首页', style: { color: '#fff'} }}
        // rightComponent={{ icon: 'search', color: AppStyles.navbarTitle.color}}
        rightComponent={<Icon
          name='search'
          type='EvilIcons'
          color="#fff"
          underlayColor="#03a9f4"
          onPress={()=>Actions.search()}
        />}
        containerStyle={{ backgroundColor: '#03a9f4' }}
      />
      }

    render() {
        const {app:{data},report,monitor,roles} = this.props
        const {theme} = this.state

        const drawerStyles = {
            drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3,backgroundColor:theme,opacity: 0.8},
            main: {paddingLeft: 3},
          }

        return (
        <View style={{ flex: 1}}>
            <ScrollView style={{paddingBottom: 20 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Button onPress={()=>Actions.monitorDetail({title: '监控详情页',id:99,author:'poetry'})}>跳转到详情1</Button>
                    {monitor && monitor.data.map(v=><Text key={v.customer_id}>{v.customer_id}-{v.customer_name}</Text>)}
                </View>
            </ScrollView>
         </View>
        );
    }
}

export default withApollo(MonitorScreen)