/* eslint-disable no-unused-vars,global-require */
import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator} from 'react-native';
import Search from 'react-native-search-box';
import { connect } from 'react-redux';
import { List, ListItem,Icon,CheckBox } from 'react-native-elements'
import langs from '../../config/langs.json'
import AppStyles from '../../theme/styles';

export default class customLanguagePanel extends Component {
  static componentName = 'CustomKeyPanel';

  constructor(props) {
    super(props);

    this.state = {
      checked:false
    };
  }

  render() {
   
    return  (
      <ScrollView>
         <List  containerStyle={{marginTop:-2}}>
            {
                langs.map((item) => (
                <ListItem
                  key={item.name}
                  title={item.name}
                  rightIcon={<CheckBox
                    containerStyle={{backgroundColor:'#fff',borderColor:'#fff'}}
                    center
                    checkedColor={AppStyles.navbar.backgroundColor}
                    iconRight
                    checked={item.checked}
                  />}
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
