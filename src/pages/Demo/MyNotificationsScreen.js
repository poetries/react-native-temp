import React from 'react';
import { View, Text,ScrollView,StyleSheet,Button } from 'react-native';
import { connect } from 'react-redux';
import {  ListItem,Header,Icon,Divider } from 'react-native-elements'
import SideMenu from '../../components/sideMenus/SideMenu'

export default class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Notifications',
      drawerIcon: ({ tintColor }) => (
            <Icon
                name='menu'
                type='EvilIcons'
                color="#fff"
                underlayColor="#03a9f4"
        />
      ),
    };
  
    render() {
      console.log(this.props)
      return (
        <SideMenu theme={"#03a9f4"} {...this.props} />
      );
    }
  }
  
  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });
  