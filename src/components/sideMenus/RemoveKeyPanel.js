/* eslint-disable no-unused-vars,global-require */
import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator} from 'react-native';
import Search from 'react-native-search-box';
import { connect } from 'react-redux';
import { ListItem,Icon,CheckBox } from 'react-native-elements'
import queryKeys from '../../config/queryKeys.json'
import AppStyles from '../../theme/styles';

export default class RemoveKeyPanel extends Component {
  static componentName = 'RemoveKeyPanel';

  constructor(props) {
    super(props);

    this.state = {
      checked:false
    };
  }

  render() {
   
    return  (
      <ScrollView>
            {
              queryKeys.map((item) => (
                <ListItem
                containerStyle={{marginTop:-2}}
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
       </ScrollView>
    )
  }
}
