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
                <Text style={{color:'#fff',fontSize:24,fontFamily:'iconfont'}}>{triggerUnicodeIcon}</Text>
                </MenuTrigger>
                <MenuOptions>
                    {menus.map((v,index)=><View key={index}>
                        <MenuOption value={v.value} >
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:14,fontFamily:'iconfont',color:v.color,paddingRight:5}}>{v.unicode}</Text>
                                <Text style={{fontSize:16}}>{v.title}</Text>
                            </View>
                        </MenuOption>
                        <Divider style={{ backgroundColor: '#ddd' }} /></View>)
                    }
                </MenuOptions>
                </Menu>
          </View>
      );
    }
  
  }
 