import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';
import configureStore from './store/configure-store';

const store = configureStore();

ReactDOM.render(
        <Provider store={store}>
                <BrowserRouter>
					<App />
                </BrowserRouter>
        </Provider>,
        document.getElementById('root')
);
registerServiceWorker();
