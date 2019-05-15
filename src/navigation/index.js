import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Actions, Scene } from 'react-native-router-flux';
import { Icon,Header } from 'react-native-elements';

import HomePage from '../pages/Home';
import DetailsPage from '../pages/Details';

const AppStyles = {
    tabbar: {
        backgroundColor: '#ffffff',
        borderTopColor: '#D0D1D5',
        borderTopWidth: 1,
    },
}

const navbarPropsTabs = {
    // ...AppConfig.navbarProps,
    // sceneStyle: {
    //   ...AppConfig.navbarProps.sceneStyle,
    //   paddingBottom: AppSizes.tabbarHeight,
    // },
  };

  export default Actions.create(
    <Scene key="root">
      <Scene key="tabs" initial={'tabBar'}  tabs tabBarIconContainerStyle={AppStyles.tabbar} pressOpacity={0.95}>
        <Scene
          title="首页"
          key={'home'}
          iconName={'md-home'}
          iconType={'ionicon'}
        //   icon={TabIcon}
          component={HomePage}
          hideNavBar={true}
          analyticsDesc={' Home '}
        />
        <Scene
          // {...navbarPropsTabs}
          key={'trending'}
          title={'趋势'}
          iconName={'md-trending-up'}
          iconType={'ionicon'}
        //   icon={TabIcon}
          component={DetailsPage}
          hideNavBar={true}
          analyticsDesc={' Trending '}
        />
    </Scene> 

 </Scene>
  )