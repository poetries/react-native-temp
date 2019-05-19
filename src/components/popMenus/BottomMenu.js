import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Modal } from 'react-native';
import { List, ListItem,Header,Icon,Divider } from 'react-native-elements'
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    renderers
} from 'react-native-popup-menu';

const { Popover,SlideInMenu } = renderers

export default class BottomMenu extends Component {
    constructor(props) {
      super(props);
  
    }
  
    render() {
     const {menus=[],triggerUnicodeIcon='',onSelect} = this.props
      return (
          <View>
                <Menu name="numbers" renderer={SlideInMenu} onSelect={value =>onSelect(value)}>
                <MenuTrigger>
                <Text style={{color:'#fff',fontSize:24}}>{'\u2605'}</Text>
                </MenuTrigger>
                <MenuOptions>
                    {menus.map((v,index)=><View key={index}>
                        <MenuOption value={v.value} >
                            <Text style={{fontSize:16}}>{v.unicode}{v.title}</Text>
                        </MenuOption>
                        <Divider style={{ backgroundColor: '#ddd' }} /></View>)
                    }
                </MenuOptions>
                </Menu>
          </View>
      );
    }
  
  }
 