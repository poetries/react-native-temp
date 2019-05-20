import React from 'react';
import { View, Text,ScrollView } from 'react-native';
import { withApollo } from 'react-apollo';
import { connect } from 'react-redux';
import { Actions, Scene } from 'react-native-router-flux';
import { Button } from '@ant-design/react-native';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'
import {  ListItem,Header,Icon,Divider } from 'react-native-elements'
import queryKeys from '../../config/queryKeys.json'
import Drawer from 'react-native-drawer'
import TabView from '../../components/tabs/TabView'
import SideMenu from '../../components/sideMenus/SideMenu'
import PopBottomMenu from '../../components/popMenus/BottomMenu'
import PopOverMenu from '../../components/popMenus/PopOverMenu'
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
          onPress={()=>navigation.setParams({isOpen:!!isOpen})}
      />
      </View>,
      headerRight: <View style={{flexDirection:'row'}}>
          <PopOverMenu
            triggerUnicodeIcon={'\ue656'}
            menus={[
              {
                unicode: '\u2605',
                title: '新增',
                color: '#f00'
              },
              {
              unicode: '\u2605',
              title: '编辑',
              color: '#fa1'
            },
            {
              unicode: '\u2605',
              title: '删除',
              color:'#f0d'
            }
            ]}
            onSelect={val=>alert(val.title)}
          />
          <PopBottomMenu
            triggerUnicodeIcon={'\ue656'}
            menus={[
              {
                unicode: '\u2605',
                title: '新增',
                color: '#f00',
                value: 1
              },
              {
                unicode: '\u2605',
                title: '编辑',
                color: '#fa1',
                value: 2
            },
            {
              unicode: '\u2605',
              title: '删除',
              color:'#f0d',
              value: 3
            }
            ]}
            onSelect={val=>alert(val)}
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
    render() {
        const {app:{data},report,monitor,roles,navigation:{navigate}} = this.props
        const {theme} = this.state
        const isOpen = this.props.navigation.getParam('isOpen')
     
        const drawerStyles = {
            drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3,backgroundColor:theme,opacity: 0.8},
            main: {paddingLeft: 3},
          }

    
        return (
        <View style={{ flex: 1}}>
          <Drawer
                content={<SideMenu theme={theme} />}
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
            <TabView queryKeys={queryKeys} list={[]} {...this.props} theme={theme} />
            <ScrollView style={{paddingBottom: 20,marginTop:100 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Button onPress={()=>navigate('MonitorDetail',{name:12})}>跳转到详情1</Button>
                    <DiyIcon  name="work" size={50}  style={{fontSize:20,color:'#f00'}}/>
                    <Button
                          onPress={() => {
                            this.setState({ defaultAnimationDialog: true });
                          }}
                        >Show Dialog</Button>
                        <Button
                        onPress={() => {
                          this.setState({ slideAnimationDialog: true });
                        }}
                      >slideAnimationDialog</Button>
                      <Button
                      onPress={() => {
                        this.setState({ scaleAnimationDialog: true });
                      }}
                    >scaleAnimationDialog</Button>
              
                  <Dialog
                      onDismiss={() => {
                        this.setState({ defaultAnimationDialog: false });
                      }}
                      width={0.9}
                      visible={this.state.defaultAnimationDialog}
                      rounded
                      actionsBordered
                      // actionContainerStyle={{
                      //   height: 100,
                      //   flexDirection: 'column',
                      // }}
                      dialogTitle={
                        <DialogTitle
                          title="Popup Dialog - Default Animation"
                          style={{
                            backgroundColor: '#F7F7F8',
                          }}
                          hasTitleBar={false}
                          align="left"
                        />
                      }
                      footer={
                        <DialogFooter>
                          <DialogButton
                            text="CANCEL"
                            bordered
                            onPress={() => {
                              this.setState({ defaultAnimationDialog: false });
                            }}
                            key="button-1"
                          />
                          <DialogButton
                            text="OK"
                            bordered
                            onPress={() => {
                              this.setState({ defaultAnimationDialog: false });
                            }}
                            key="button-2"
                          />
                        </DialogFooter>
                      }
                    >
                      <DialogContent
                        style={{
                          backgroundColor: '#F7F7F8',
                        }}
                      >
                        <Text>Default Animation</Text>
                        <Text>No onTouchOutside handler. will not dismiss when touch overlay.</Text>
                      </DialogContent>
                    </Dialog>
                    <Dialog
                    onDismiss={() => {
                      this.setState({ slideAnimationDialog: false });
                    }}
                    onTouchOutside={() => {
                      this.setState({ slideAnimationDialog: false });
                    }}
                    visible={this.state.slideAnimationDialog}
                    dialogTitle={<DialogTitle title="Popup Dialog - Slide Animation" />}
                    dialogAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
                  >
                    <DialogContent>
                      <Text>Slide Animation</Text>
                    </DialogContent>
                  </Dialog>

                <Dialog
                    onTouchOutside={() => {
                      this.setState({ scaleAnimationDialog: false });
                    }}
                    width={0.9}
                    visible={this.state.scaleAnimationDialog}
                    dialogAnimation={new ScaleAnimation()}
                    onHardwareBackPress={() => {
                      console.log('onHardwareBackPress');
                      this.setState({ scaleAnimationDialog: false });
                      return true;
                    }}
                    dialogTitle={
                      <DialogTitle
                        title="Popup Dialog - Scale Animation"
                        hasTitleBar={false}
                      />
                    }
                    actions={[
                      <DialogButton
                        text="DISMISS"
                        onPress={() => {
                          this.setState({ scaleAnimationDialog: false });
                        }}
                        key="button-1"
                      />,
                    ]}
                  >
                    <DialogContent>
                      <Button
                        title="Show Dialog - Default Animation"
                        onPress={() => {
                          this.setState({ defaultAnimationDialog: true });
                        }}
                      />
                    </DialogContent>
                  </Dialog>


                    {monitor && monitor.data.map(v=><Text key={v.customer_id}>{v.customer_id}-{v.customer_name}</Text>)}
                </View>
            </ScrollView>
          </Drawer>
          
            
         </View>
        );
    }
}

export default withApollo(MonitorScreen)