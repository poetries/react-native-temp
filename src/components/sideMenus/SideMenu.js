/* eslint-disable no-unused-vars,global-require */
import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet,ActivityIndicator,FlatList,Avatar} from 'react-native';
import { ListItem,Icon } from 'react-native-elements'
import { sideMenuConfig } from '../../config/sideMenu'

export default class SideMenu extends Component  {
  render () {
    const {navigation:{navigate}} = this.props
    return (
      <View>
          {
            sideMenuConfig.map((item) => (
              <ListItem
                containerStyle={{borderBottomColor: '#fff',backgroundColor:this.props.theme,opacity: 0.8}}
                key={item.title}
                title={item.title}
                leftIcon={<Icon
                  containerStyle={{paddingRight:10}}
                  name={item.icon}
                  type={item.type}
                  color="#fff"
                />}
                onPress={()=>item.action?item.action(navigate):null}
                rightIcon={{color:'#fff'}}
                titleStyle={{color:'#fff'}}
              />
            ))
        }
    </View>
    )
  }
}
