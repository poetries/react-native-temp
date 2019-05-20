/**
 * WebViewPage
 * @flow
 **/
'use strict'
import React, {Component} from 'react'
import {
    Image,
    ScrollView,
    StyleSheet,
    WebView,
    Platform,
    TouchableOpacity,
    Text,
    View,
} from 'react-native'

const WEBVIEW_REF = 'webview';


export default class WebViewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            title: props.title,
            theme: props.theme || '#f00'
        }
        this.onNavigationStateChange = this.onNavigationStateChange.bind(this)
    }

    onNavigationStateChange(navState) {
        this.setState({
            canGoBack: navState.canGoBack,
            url: navState.url,
        });
    }

    render() {
        return (
            <View>
                <WebView
                    // ref={WEBVIEW_REF}
                    // startInLoadingState={true}
                    ref={(webview) => {
                        this.webview = webview;
                      }}
                      style={{marginTop: 20}}
                      domStorageEnabled={ true }
                      javaScriptEnabled={ true }
                      renderError={ (e) => {
                        if (e === 'WebKitErrorDomain') {
                          return
                        }
                      }}
                      scalesPageToFit={true}
                     startInLoadingState={true}
                      originWhitelist={['*']}
                      onNavigationStateChange={(event) => {
                        if (event.url.startsWith('http')) {
                        //   Helper.openLink(event.url);
                          this.webview.stopLoading();
                        }
                      }}
                      injectedJavaScript=""
                    // onNavigationStateChange={(e)=>this.onNavigationStateChange(e)}
                    source={{uri: this.state.url}}
                    />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
})
