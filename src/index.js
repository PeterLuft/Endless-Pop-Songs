import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import thunk from "redux-thunk";
import Reducer from './Reducers';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

const middleware = [thunk];
const store = createStore(Reducer, applyMiddleware(...middleware));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();
