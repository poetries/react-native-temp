/* eslint-disable no-unused-vars,global-require */
import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import Search from 'react-native-search-box';
import { ListItem,Header,Icon } from 'react-native-elements'
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'

export default class TabItem extends Component {
    static componentName = 'TabItem';
  
    constructor(props) {
      super(props);
  
      this.state = {
  
      };
    }
  
    render() {
      const {list} = this.props

      const content =  list && list.length
      ? <View style={{paddingBottom:60}}>
      {
           list.map(v => (
                    <ListItem
                        // roundAvatar
                        // avatar={{uri:l.avatar_url}}
                        key={v.node_id}
                        title={v.description}
                        onPress={()=>Actions.trending()}
                    />
              ))
      }
    </View>
    : null

      return <View>
          { content }
      </View>
    }
  }
