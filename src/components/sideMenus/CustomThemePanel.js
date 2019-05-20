/* eslint-disable no-unused-vars,global-require */
import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator,TouchableOpacity } from 'react-native';
import Search from 'react-native-search-box';
import { connect } from 'react-redux';
import { ListItem,Icon,ButtonGroup } from 'react-native-elements'
import Utils from '../../utils/Utils'
import storage from '../../utils/Storage'

const randomColor16 = Utils.randomColor()

export default class CustomThemePanel extends Component {
  static componentName = 'CustomThemePanel';

  constructor(props) {
    super(props);
    this.state = {
     
    }
  }
  saveThemeSetting=(v)=>{
    storage.save({
      key: 'themeConfig',
      data: {
        bg: v
      }
    })
  }
  componentDitMount(){
    storage.load({
      key:'themeConfig',
      autoSync: true,
      syncInBackground: true,
      syncInBackground: true
    }).then(res=>console.log(res.bg,'===='))
  }
  render() {
    return  (
      <ScrollView style={{marginTop:-15}}>
            <View style={ {flexWrap:'wrap',justifyContent:'space-around',alignItems:'center',flexDirection:'row',marginTop:20}}>
                 {
                  randomColor16.map((v,index)=>{
                     return  <TouchableOpacity  onPress={()=>this.saveThemeSetting(v)} key={index}>
                        <View 
                            style={ {justifyContent:'center',alignItems:'center',width:80,height:80,backgroundColor:v,margin:5}}
                          >
                            <Text style={ {fontSize:16,color:'#fff'}}>{v}</Text>
                        </View>
                     </TouchableOpacity>
                   })
                 }
            </View>
    </ScrollView>
    )
  }
}
