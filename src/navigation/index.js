import React from 'react';
import { View, TouchableOpacity,Text } from 'react-native';
import AppSizes from '../theme/sizes';
import AppStyles from '../theme/styles';
import AppConfig from '../constants/config';
import { Actions, Scene } from 'react-native-router-flux';
import { Icon,Header } from 'react-native-elements';
import TabIcon from '../components/tabs/TabIcon';
import Demo from '../pages/Demo';
import DetailScreen from '../pages/Demo/Detail';
import CraftScreen from '../pages/Craft';
import AnalyseScreen from '../pages/Analyse';
import MsgScreen from '../pages/Msg';
import UserScreen from '../pages/UserCenter';
import Login from '../pages/Login';
import ForgetPwd from '../pages/ForgetPwd';
import Register from '../pages/Register';

const navbarPropsTabs = {
  ...AppConfig.navbarProps,
  sceneStyle: {
    ...AppConfig.navbarProps.sceneStyle,
    paddingBottom: AppSizes.tabbarHeight,
  },
};
const titleStyles = {
  flex:1,
  textAlign:'center',
  color: '#fff'
}

  export default Actions.create(
    <Scene key="root" {...AppConfig.navbarProps} hideNavBar navBarButtonColor="#fff">
     {/** 以下是底部Tabs切换 **/}
      <Scene key="tabs" initial={'tabBar'}  tabs tabBarIconContainerStyle={AppStyles.tabbar} pressOpacity={0.95}>
          <Scene
              {...navbarPropsTabs}
              key={'monitor'}
              title={'首页'}
              iconName={'md-home'}
              iconType={'ionicon'}
              icon={TabIcon}
              component={Demo}
              // navBar={()=><Header
              //   leftComponent={
              //     <Icon
              //       name='menu'
              //       type='EvilIcons'
              //       color="#fff"
              //       underlayColor="#03a9f4"
              //       onPress={()=>Actions.login()}
              //   />
              //   }
              //   centerComponent={{ text: '首页', style: { color: AppStyles.navbarTitle.color} }}
              //   rightComponent={<Icon
              //     name='ios-more'
              //     type='ionicon'
              //     color="#fff"
              //     underlayColor="#03a9f4"
              //     onPress={(e)=>console.log(e)}
              //   />}
              //   containerStyle={{backgroundColor:AppStyles.navbar.backgroundColor,height:70,marginTop:-15}}
              // />}
              hideNavBar={true}
            />
            <Scene
              {...navbarPropsTabs}
              key={'craft'}
              title={'工艺'}
              renderTitle={<Text style={titleStyles}>工艺</Text>}
              iconName={'md-trending-up'}
              iconType={'ionicon'}
              icon={TabIcon}
              component={CraftScreen}
              rightTitle={'保存'}
              leftTitle={'编辑'}
              leftButtonTextStyle={{fontSize:14}}
              onLeft={() => Actions.register()}
              onRight={() => Actions.register()}
              rightButtonTextStyle={{fontSize:14}}
            />
            <Scene
              {...navbarPropsTabs}
              key={'analyse'}
              title={'分析'}
              renderTitle={<Text style={titleStyles}>分析</Text>}
              iconName={'md-trending-up'}
              iconType={'ionicon'}
              icon={TabIcon}
              component={AnalyseScreen}
            />
            <Scene
              {...navbarPropsTabs}
              key={'message'}
              title={'消息中心'}
              renderTitle={<Text style={titleStyles}>消息中心</Text>}
              iconName={'md-star'}
              iconType={'ionicon'}
              icon={TabIcon}
              component={MsgScreen}
            />
            <Scene
              {...navbarPropsTabs}
              key={'my'}
              title={'我的'}
              renderTitle={<Text style={titleStyles}>我的</Text>}
              iconName={'md-trending-up'}
              iconName={'md-apps'}
              iconType={'ionicon'}
              icon={TabIcon}
              component={UserScreen}
            />
        </Scene> 

        {/** 以下是页面跳转 **/}
        <Scene
            {...navbarPropsTabs}
            key={'login'}
            title="登录"
            // initial={true}
            component={Login}
          />
          <Scene
              {...navbarPropsTabs}
              key={'forgetPwd'}
              title="找回密码"
              component={ForgetPwd}
          />
          <Scene
              {...navbarPropsTabs}
              key={'register'}
              title="注册"
              component={Register}
          />
          <Scene
            {...navbarPropsTabs}
            key={'monitorDetail'}
            component={DetailScreen}
           />
 </Scene>
  )