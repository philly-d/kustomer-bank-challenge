import 'babel-polyfill';
import '../styles/styles.scss';
// import '../semantic/dist/semantic.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore  from './store/configureStore';
import App from './components/App';

const store = configureStore();
const rootElement = document.getElementById('app');

// Render the React application to the DOM
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
