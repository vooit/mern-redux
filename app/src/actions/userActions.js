import * as types from './actionTypes';
import api from "../api/api";

export function loadUsersSuccess(users) {
    return {type: types.LOAD_USERS_SUCCESS, users};
}

export function createUserSuccess(user) {
    return {type: types.CREATE_USER_SUCCESS, user}
}

export function deleteUserSuccess(user) {
    return {type: types.DELETE_USER_SUCCESS, user}
}

export function deleteUser(user) {
    return function (dispatch) {
        return api.deleteUser(user).then(() => {
            dispatch(deleteUserSuccess(user));
            return user
        }).catch(error => {
            throw(error);
        })
    }
}
