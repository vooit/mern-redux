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
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static deleteUser(user) {
        const request = new Request(`http://localhost:3001/api/${user._id}`, {
            method: 'DELETE'
        });
        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}
