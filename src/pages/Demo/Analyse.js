import React,{Component} from 'react';
import { View, Text,SafeAreaView,StyleSheet,ListView,RefreshControl} from 'react-native';
import { connect } from 'react-redux';
import { Button } from '@ant-design/react-native';
import appConfig from '../../theme/styles'
import {HomeTabs} from '../../navigation/TopTabs'
import { createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import PopMenu from '../../components/popMenu'
import iconMap from '../../config/unicodeIcon'

@connect(({ app }) => {
    return app;
})
class AnalyseScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const {navigate} = navigation;
        return {
          headerTitle: <View style={{flex:1,justifyContent:'center',flexDirection:'row'}}>
              <PopMenu
              triggerUnicodeIcon={iconMap.dropMenu}
              title={navigation.getParam("seleVal","今天")}
              menus={[
                {
                  unicode: iconMap.star,
                  title: '今天',
                  color: 'green'
                },
                {
                unicode: iconMap.star,
                title: '明天',
                color: '#fa1'
              },
              {
                unicode: iconMap.star,
                title: '最近七天',
                color:'#f013'
              }
              ]}
              onSelect={val=>navigation.setParams({seleVal:val.title})}
            />
          </View>,
          ...appConfig.navbar,
          headerStyle: {
            ...appConfig.navbar.headerStyle,
            height: 40
          },
          headerRight: <View style={{flex:1,flexDirection:'row',paddingRight:10}}>
          <PopMenu
            triggerUnicodeIcon={iconMap.menu2}
            showBottomMenu={true}
            menus={[
              {
                unicode: iconMap.add,
                title: '新增',
                color: 'green'
              },
              {
              unicode: iconMap.edit,
              title: '编辑',
              color: '#fa1'
            },
            {
              unicode: iconMap.delete,
              title: '删除',
              color:'#f013'
            }
            ]}
            onSelect={val=>navigate('Login')}
          />
          
      </View>
        }
      };
    constructor(props) {
        super(props);
    
        this.state = {
         
        };
      }
      onRefresh() {
        // this.loadData(true);
    }
    render() {
        return (
          <SafeAreaView style={{ flex: 1 }}>
               <HomeTabs />
          </SafeAreaView>
        );
    }
}

export default AnalyseScreen