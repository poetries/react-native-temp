import React from 'react';
import { View, Text,ScrollView,StyleSheet,Button } from 'react-native';
import { withApollo } from 'react-apollo';
import { connect } from 'react-redux';
import {  ListItem,Header,Icon,Divider } from 'react-native-elements'

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
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
  }
  
  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });
  