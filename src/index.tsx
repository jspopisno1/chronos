import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.scss';
import { App } from './App';
ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}