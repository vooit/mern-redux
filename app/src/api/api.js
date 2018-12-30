let url = 'http://localhost:3001/api';

export default class Api {

    static getAllUsers() {
        return fetch(`${url}`).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static postUser(user) {
        const request = new Request('http://localhost:3001/api', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({user: user})
        });
        return fetch(request).then(response => {
            console.log(response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static deleteUser(user) {
        return fetch('http://localhost:3001/api' + '/' + user.id, {
            method: 'DELETE'
        }).then(response => response.json()).catch(error => {
            return error;
        });
    }
}
