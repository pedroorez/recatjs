import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss';

import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();

ReactDOM.render(<App />, document.getElementById('app'));