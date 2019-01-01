import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';


export default function userReducer(state = initialState.users, action) {
    switch(action.type) {
        case types.LOAD_USERS_SUCCESS:
            return action.users;
        case types.CREATE_USER_SUCCESS:
            const newUser = action.user.user;
            browserHistory.push(`/users/`);
            return [
                ...state.filter(user => user._id !== action.user._id),
                Object.assign({}, newUser),
            ]
        case types.DELETE_USER_SUCCESS: {
            const newState = Object.assign([], state);
            const indexOfUserToDelete = state.findIndex(user => {
                return user.id === action.user.id
            })
            newState.splice(indexOfUserToDelete, 1);
            // browserHistory.push('/users');
            return newState;
        }
        default:
            return state;
    }
}