import {combineReducers} from 'redux';
import users from './userReducer';
import user from './userReducer';

const rootReducer = combineReducers({
    users: users,
    user: user
});

export default rootReducer;