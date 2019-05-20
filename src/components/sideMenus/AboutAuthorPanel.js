/* eslint-disable no-unused-vars,global-require */
import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator,Image,StyleSheet,Dimensions,Platform } from 'react-native';
import Search from 'react-native-search-box';
import { connect } from 'react-redux';
import { ListItem,Header,Icon } from 'react-native-elements'
import { userCenterConfig } from '../../config/userCenterConfig'
// import Accordion from 'react-native-collapsible/Accordion';
import { Accordion, List as AntList } from 'antd-mobile-rn';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

const {authorInfo} = userCenterConfig.settings.children[1]
const window = Dimensions.get('window');

export default class AboutAuthorPanel extends Component {
  static componentName = 'CustomKeyPanel';

  constructor(props) {
    super(props);

    this.state = {
      activeSections: [2, 0],
    };
  }
  onChange = (activeSections: number[]) => {
    this.setState({ activeSections });
  }
  renderRow(){
    const content = <Accordion
          style={{backgroundColor:'#fff'}}
          onChange={this.onChange}
          activeSections={this.state.activeSections}
      >
          {
              userCenterConfig['settings'].children[1].children.map(v=>{
                return  <Accordion.Panel  key={v.title} header={
                  <View style={{flexDirection:'row'}}>
                      <Icon
                      name={v.icon}
                      type={v.type}
                    />
                      <Text style={{padding:15,paddingRight:235}}>{v.title}</Text>
                  </View>
                }>
                      {
                              <AntList>
                                  {
                                    v.children.map(vv=> <AntList.Item arrow='horizontal' key={vv.title} style={{backgroundColor:'#fdfbfb'}}><Text style={{fontSize:14,paddingLeft:40}}>{vv.title}</Text></AntList.Item>)
                                  }
                              </AntList>
                      }
                </Accordion.Panel>
              })
          }
    </Accordion>
    
    return content
  }
  render() {
    return  (
      <ParallaxScrollView
        backgroundColor="#f3f3f4"
        contentBackgroundColor="#fff"
        headerBackgroundColor="#333"
        fadeOutForeground={true}
        parallaxHeaderHeight={200}
        stickyHeaderHeight={1}
        backgroundSpeed={10}
        renderForeground={() => (
          <View style={ styles.bgCon }>
              <Image style={styles.avatar} source={{uri: authorInfo.avatar}}/>
              <Text style={ styles.sectionSpeakerText }>
                  { authorInfo.name }
              </Text>
              <Text style={ styles.sectionTitleText }>
                  { authorInfo.description }
              </Text>
           </View>
       )}
      renderBackground={()=>(
        <View>
            <Image source={{
                uri: authorInfo.aboutAuthorPost,
                width: window.width,
                height: 200
            }}/>
            <View style={{
                position: 'absolute',
                top: 0,
                width: window.width,
                backgroundColor: 'rgba(0,0,0,.4)',
                height: 200
            }}/>
      </View>
      ) }
      renderStickyHeader={()=>(
        <View key="sticky-header" style={styles.stickySection}>
            <Text style={styles.stickySectionText}>{authorInfo.name}</Text>
         </View>
      )}
    >
        {this.renderRow()}
    </ParallaxScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'black'
  },
  bgCon:{
    padding:20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
      width: 90,
      height: 90,
      marginBottom: 5,
      borderRadius: 90 / 2
  },
  sectionSpeakerText: {
      color: 'white',
      fontSize: 24,
      paddingVertical: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
  },
  sectionTitleText: {
      color: 'white',
      fontSize: 16,
      marginLeft: 10,
      marginRight: 10,
  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    margin: 10
  },
  stickySection: {
    height: 200,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20:0,
    alignItems: 'center',
  },
});