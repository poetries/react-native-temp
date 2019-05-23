/* eslint-disable no-unused-vars,global-require */
import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet,ActivityIndicator,FlatList,Avatar} from 'react-native';
import Search from 'react-native-search-box';
import { connect } from 'react-redux';
import {  ListItem,Icon } from 'react-native-elements'

export default class SideMenu extends Component {
  static componentName = 'SideMenu';

  constructor(props) {
    super(props);

    this.state = {

    };
  }
  
  render () {
    const {sideMenuConfig,bgColor} = this.props
    return (
      <View>
          {
            sideMenuConfig.map((item) => (
              <ListItem
                containerStyle={{borderBottomColor: '#fff',backgroundColor:bgColor}}
                key={item.title}
                title={item.title}
                leftIcon={<Icon
                  containerStyle={{paddingRight:10}}
                  name={item.icon}
                  type={item.type}
                  color="#fff"
                />}
                onPress={()=>item.action?item.action():null}
                rightIcon={{color:'#fff'}}
                titleStyle={{color:'#fff'}}
              />
            ))
          }
    </View>
    )
  }
}
