import api from '../api/api';
import {loadUsersSuccess, createUserSuccess, deleteUserSuccess} from './userActions'

export function loadUsers() {
    return function (dispatch) {
        return api.getAllUsers().then(users => {
            dispatch(loadUsersSuccess(users.users));
        }).catch(error => {
            throw(error);
        });
    };
}

export function postUser(user) {
    return function (dispatch) {
        return api.postUser(user).then(response => {
            dispatch(createUserSuccess(response));
            console.log("createUserSuccess + ", response);
            return response;
        }).catch(error => {
            throw(error);
        });
    };
}

export function deleteUser(user) {
    return function (dispatch) {
        return api.deleteUser(user).then(() => {
            console.log(`Deleted ${user.id}`)
            dispatch(deleteUserSuccess(user));
            return;
        }).catch(error => {
            throw(error);
        })
    }
}
