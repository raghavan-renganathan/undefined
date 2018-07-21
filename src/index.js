/**
 * This file is the entry point for the front-end
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router/Router';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Router/>, document.getElementById('root'));
