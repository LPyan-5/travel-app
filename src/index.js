import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers';
import { Provider } from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { ApolloProvider }from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com'
});
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
ReactDOM.render(
    <ApolloProvider client = {client}>
        <Provider store={store}>
            <App/> 
        </Provider>
    </ApolloProvider>
    ,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

