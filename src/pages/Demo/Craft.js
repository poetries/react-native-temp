import React from 'react';
import { View, Text,ScrollView } from 'react-native';
import { Button } from '@ant-design/react-native';
import {  ListItem,Header,Icon,Divider } from 'react-native-elements'
import { connect } from 'react-redux';
import appConfig from '../../theme/styles'
import Dialog, {
    DialogTitle,
    DialogContent,
    DialogFooter,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
  } from 'react-native-popup-dialog';
  import ActionSheet from 'react-native-actionsheet'
  
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
            <Text  style={{fontSize:22,fontFamily:'iconfont',color:'#fff'}} onPress={navigation.getParam("showActionSheet")}>{'\ue656'}</Text>
      </View>
        }
      };
      state = {
        visible: false,
        isOpen:false,
        customBackgroundDialog: false,
        defaultAnimationDialog: false,
        scaleAnimationDialog: false,
        slideAnimationDialog: false,
        show: false,
        theme: '#03a9f4',
        options:['选择工艺卡或工艺记录','选择模板','取消'],
    }
    componentDidMount(){
        const {dispatch,navigation} = this.props 

        navigation.setParams({
          showActionSheet:this._showActionSheet
        })
    }
    _showActionSheet = () => {
      this.ActionSheet.show()
    };
    render() {
        const {report:{data=[]},navigation:{navigate}} = this.props

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>工艺</Text>
                <Button onPress={()=>navigate('MonitorDetail',{name:12,title:'poetry'})}>跳转到详情1</Button>
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
                <ScrollView>
                    {data && data.map(v=><Text key={v.advertiser_id}>花费：{v.cost}</Text>)}
                </ScrollView>
                <ActionSheet
                    ref={o => this.ActionSheet = o}
                    title={''}
                    options={this.state.options}
                    cancelButtonIndex={2}
                    // onPress={(index) => {this.onActionSheet(index) }}
                  />
            </View>
        );
    }
}

export default CraftScreen