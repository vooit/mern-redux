import React from 'react';
import {Link} from 'react-router';

const UsersList = ({users}) => {
    let usersList = users ?
        users.map((user, index) =>
            <li className="list-group-item" key={index}><Link to={'/users/' + user._id}>{user.firstName} {user.lastName}</Link></li>
        ) : <span>no results fetched</span>;


    return (
        <ul>
            {usersList}
        </ul>
    );
};

export default UsersList;