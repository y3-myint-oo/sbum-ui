import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';


import rootReducer from './reducers/';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { changeMenuToggle } from './actions';


const store = createStore(rootReducer);
console.log(" Store ", store.getState());
store.subscribe( () => console.log('store',store.getState()))
store.dispatch( changeMenuToggle(true))

WebFont.load({
    google: {
      families: ['Padauk', 'sans-serif']
    }
});


ReactDOM.render( 
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));
serviceWorker.unregister();
