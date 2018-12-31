import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import {loadUsers} from "./actions/usersActions";
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadUsers());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
