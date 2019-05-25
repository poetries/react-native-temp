import React from 'react';
import { View, Text,ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Button } from '@ant-design/react-native';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'
import {  ListItem,Header,Icon,Divider } from 'react-native-elements'
import queryKeys from '../../config/queryKeys.json'
import Drawer from 'react-native-drawer'
import TabView from '../../components/tabs/TabView'
import SideMenu from '../../components/sideMenus/SideMenu'
import PopMenu from '../../components/popMenu'
import Dialog, {
    DialogTitle,
    DialogContent,
    DialogFooter,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
  } from 'react-native-popup-dialog';
  import DiyIcon from '../../utils/DiyIcon';
  import appConfig from '../../theme/styles'
  import iconMap from '../../config/unicodeIcon'

@connect(({ app,report,monitor,roles }) => ({
    app,
    report,
    monitor,
    roles
}))
class MonitorScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const {navigate} = navigation;
    const isOpen = navigation.getParam('isOpen')
    return {
      headerTitle: "实时监控",
      ...appConfig.navbar,
      headerLeft: <View style={{paddingLeft:10}}>
          <Icon
          name='menu'
          type='EvilIcons'
          color="#fff"
          underlayColor="#03a9f4"
          onPress={navigation.getParam("openSideMenu")}
      />
      </View>,
      headerRight: <View style={{flexDirection:'row',paddingRight:10}}>
          <PopMenu
            triggerUnicodeIcon={iconMap.add}
            showPopOver={true}
            menus={[
              {
                unicode: iconMap.add,
                title: '新增',
                color: 'green'
              },
              {
              unicode: iconMap.edit,
              title: '编辑',
              color: '#fa1'
            },
            {
              unicode: iconMap.delete,
              title: '删除',
              color:'#f013'
            }
            ]}
            onSelect={val=>navigate('Login')}
          />
          
      </View>
     
    }
  };
    state = {
        visible: true,
        isOpen:false,
        customBackgroundDialog: false,
        defaultAnimationDialog: false,
        scaleAnimationDialog: false,
        slideAnimationDialog: false,
        show: false,
        theme: '#03a9f4'
    }
    componentDidMount(){
        const {dispatch,navigation} = this.props 
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
        
        navigation.setParams({ openSideMenu: this._openSideMenu});
    }
    _openSideMenu = () => {
      this.setState({ isOpen: !this.state.isOpen });
    };
    render() {
        const {app:{data},report,monitor,roles,navigation:{navigate}} = this.props
        const {theme,isOpen} = this.state
     
        const drawerStyles = {
            drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3,backgroundColor:theme,opacity: 0.8},
            main: {paddingLeft: 3},
          }

    
        return (
        <View style={{ flex: 1}}>
          <Drawer
                content={<SideMenu theme={theme} {...this.props} />}
                ref={(ref) => this._drawer = ref}
                open={isOpen}
                openDrawerOffset={100}
                type="overlay"
                styles={drawerStyles}
                panCloseMask={0.2}
                closedDrawerOffset={-3}
                tapToClose={true}
                openDrawerOffset={0.2} // 20% gap on the right side of drawer
                tweenEasing="linear"
                tweenHandler={(ratio) => ({
                  main: { opacity:(2-ratio)/2 }
                })}
            >
            <ScrollView style={{paddingBottom: 20,marginTop:50 }}>
               {monitor && monitor.data.map(v=><Text key={v.customer_id}>{v.customer_id}-{v.customer_name}</Text>)}
            </ScrollView>
          </Drawer>
          
            
         </View>
        );
    }
}

export default MonitorScreen