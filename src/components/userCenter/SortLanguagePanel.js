/* eslint-disable no-unused-vars,global-require */
import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator} from 'react-native';
import Search from 'react-native-search-box';
import { connect } from 'react-redux';
import { List, ListItem,Icon,CheckBox } from 'react-native-elements'
import langs from '../../config/langs.json'
import AppStyles from '../../theme/styles';

export default class SortLanguagePanel extends Component {
  static componentName = 'SortLanguagePanel';

  constructor(props) {
    super(props);

    this.state = {
      checked:false
    };
  }

  render() {
   
    return  (
      <ScrollView>
         <List  containerStyle={{marginTop:-1}}>
            {
                langs.map((item) => (
                <ListItem
                  key={item.name}
                  title={item.name}
                  rightIcon={{color:'#fff'}}
                  leftIcon={ <Icon
                    name='menu'
                    type='Entypo'
                    color={AppStyles.navbar.backgroundColor}
                    containerStyle={{paddingRight:10}}
                  />}
                />
              ))
            }
          </List>
       </ScrollView>
    )
  }
}
