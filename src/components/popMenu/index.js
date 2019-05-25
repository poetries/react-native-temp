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

export default class PopMenu extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {
        menus=[],
        triggerUnicodeIcon='',
        onSelect,
        title='',
        showPopOver=false,
        showBottomMenu=false
    } = this.props

    let menuProps = {}
    if(showPopOver) {
        menuProps.renderer= Popover 
        menuProps.rendererProps={ placement: 'bottom',anchorStyle:{marginRight:3,marginTop:4} }
    }
    if(showBottomMenu) {
        menuProps = {
            name: "numbers",
            renderer: SlideInMenu
        }
    }
    return (
        <View style={{flexDirection:'row'}}>
            <Text  style={{color:'#fff',fontSize:14,position:'relative',left:12}}>{title}</Text>
            <Menu {...menuProps}>
                <MenuTrigger >
                    <Text style={{color:'#fff',fontSize:24,fontFamily:'iconfont'}}>{triggerUnicodeIcon}</Text>
                </MenuTrigger>
                <MenuOptions>
                    {menus.map((v,index)=><View key={index}><MenuOption onSelect={() => onSelect(v)}>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',padding:6}}>
                          <Text style={{fontSize:16,fontFamily:'iconfont',color:v.color,paddingRight:4}}>{v.unicode}</Text>
                          <Text style={{fontSize:16}}>{v.title}</Text>
                        </View>
                    </MenuOption>
                    <Divider style={{ backgroundColor: '#ddd' }} /></View>)}
                    </MenuOptions>
                </Menu>
        </View>
    );
  }

}