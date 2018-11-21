import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import Header from './components/header/Header';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();