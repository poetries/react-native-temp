/* eslint-disable no-unused-vars,global-require */
import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import Search from 'react-native-search-box';
import { List, ListItem,Header,Icon } from 'react-native-elements'
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
    const {queryKeys,queryMethod} = this.props
 
    return   <ScrollableTabView
            style={{marginTop: 0,zIndex:999}}
            tabBarUnderlineColor={"#fff"}
            ref="scrollableTabView"
            tabBarInactiveTextColor='#fff'
            tabBarBackgroundColor={this.props.theme}
            tabBarActiveTextColor='white'
            initialPage={0}
            onChangeTab={(tab)=>queryMethod && queryMethod(tab.ref.props.tabLabel)}
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


