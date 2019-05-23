import React, { PureComponent } from 'react';
import { 
    createStackNavigator, 
    createSwitchNavigator
} from 'react-navigation'; 
import { BackHandler, Animated, Easing } from 'react-native'
import {
    createReduxContainer,
    createReactNavigationReduxMiddleware,
    createNavigationReducer,
    reduxifyNavigator
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

import AuthStack from './navigation/AuthStack'
import BottomTabStack from './navigation/BottomTabStack'
import AppStack from './navigation/AppStack'

const AppNavigator = createStackNavigator(
    {
        // 底部Tabs切换相关
        Main: {
            screen: BottomTabStack, 
            navigationOptions: ({  navigation }) => {
                return {
                    header: null
                }
            }
        },
        ...AppStack
    }, 
    {
        initialRouteName: 'Main',
        headerMode: 'screen'
    }
);

 const RootStack = createSwitchNavigator({
    App: AppNavigator,
    Auth: AuthStack
  },
  {
    initialRouteName: 'Auth',
  })


export const routerReducer = createNavigationReducer(RootStack)

export const routerMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.router
)

const App = reduxifyNavigator(RootStack, 'root')

function getActiveRouteName(navigationState) {
    if (!navigationState) {
      return null
    }
    const route = navigationState.routes[navigationState.index]
    if (route.routes) {
      return getActiveRouteName(route)
    }
    return route.routeName
  }

@connect(({ app, router }) => ({ app, router }))
class Router extends PureComponent {
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backHandle)
      }
    
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
      }
    
      backHandle = () => {
        const currentScreen = getActiveRouteName(this.props.router)
        if (currentScreen === 'Login') {
          return true
        }
        if (currentScreen !== 'Home') {
          this.props.dispatch(NavigationActions.back())
          return true
        }
        return false
    }
    render() {
        const { app, dispatch, router } = this.props
        // if (app.loading) return <Loading />
        return <App dispatch={dispatch} state={router} />
    }
}

export default Router;