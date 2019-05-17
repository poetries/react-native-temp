import React from 'react';
import dva from './utils/dva';
import Apollo from './utils/apollo';
import { connect } from 'react-redux';
import { Router } from 'react-native-router-flux';
import AppRoutes from './navigation/index';

import Models from './models/index';

const RouterWithRedux = connect()(Router);

const rootModel = []
Object.values(Models).forEach(value=>{
    rootModel.push(value)
})

const dvaApp = dva({
    initialState: {},
    models: rootModel,
    onError(e) {
        console.log('onError', e)
    },
})

class App extends React.Component {
    render() {
        return (
            <Apollo>
                <RouterWithRedux  scenes={AppRoutes} />
            </Apollo>
        );
    }
}

export default dvaApp.start(<App />);