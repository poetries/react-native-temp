import React, { PureComponent } from 'react';
import { 
    createStackNavigator, 
    createSwitchNavigator
} from 'react-navigation'; // Version can be specified in package.json
import {
    createReduxContainer,
    createReactNavigationReduxMiddleware,
    createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

import AuthLoadingScreen from '../pages/AuthLoadingScreen'
import AuthStack from './AuthStack'
import AppTabNav from './AppTabNav'
import OtherStack from './OtherStack'

const AppNavigator = createStackNavigator(
    {
        // 底部Tabs切换相关
        Main: {
            screen: AppTabNav, 
            navigationOptions: ({  navigation }) => {
                return {
                    header: null
                }
            }
        },
        ...OtherStack
    }, 
    {
        initialRouteName: 'Main',
        headerMode: 'screen'
    }
);

 const RootStack = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: AppNavigator,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading',
  })


export const routerReducer = createNavigationReducer(RootStack)
export const routerMiddleware = createReactNavigationReduxMiddleware(
    state => state.router,
    'root'
)

const App = createReduxContainer(RootStack, 'root')

@connect(({ app, router }) => ({ app, router }))
class Router extends PureComponent {
    render() {
        const { app, dispatch, router } = this.props
        // if (app.loading) return <Loading />
        return <App dispatch={dispatch} state={router} />
    }
}

export default Router;