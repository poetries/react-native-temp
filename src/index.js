import React from 'react';
import dva from './utils/dva';
import Apollo from './utils/apollo';
import Router, { routerMiddleware, routerReducer } from './router';
import Models from './models/index';

const rootModel = []
Object.values(Models).forEach(value=>{
    rootModel.push(value)
})

const dvaApp = dva({
    initialState: {},
    models: rootModel,
    extraReducers: { router: routerReducer },
    onAction: [routerMiddleware],
    onError(e) {
        console.log('onError', e)
    },
})

class App extends React.Component {
    render() {
        return (
            <Apollo>
                <Router />
            </Apollo>
        );
    }
}

export default dvaApp.start(<App />);