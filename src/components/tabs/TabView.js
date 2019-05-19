/* eslint-disable no-unused-vars,global-require */
import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import Search from 'react-native-search-box';
import { List, ListItem,Header,Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'
import TabItem from './TabItem'

export default class TabView extends Component {
  static componentName = 'TabView';

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const {queryKeys,fetchGithubList} = this.props
 
    return   <ScrollableTabView
            style={{marginTop: -1,zIndex:2}}
            tabBarUnderlineColor={"#e7e7e7"}
            ref="scrollableTabView"
            tabBarInactiveTextColor='mintcream'
            tabBarBackgroundColor={this.props.theme}
            tabBarActiveTextColor='white'
            initialPage={0}
            onChangeTab={(tab)=>fetchGithubList && fetchGithubList(tab.ref.props.tabLabel)}
            renderTabBar={() => <ScrollableTabBar style={{height: 40,borderWidth:0,elevation:2}} tabStyle={{height: 39}}
            underlineHeight={2}/>}
    >
          {
              queryKeys && queryKeys.map(v=>{
              return <ScrollView  tabLabel={v.name}  key={v.name}><TabItem  {...this.props}
            /></ScrollView>
            })
          }
    </ScrollableTabView>
  }
}


