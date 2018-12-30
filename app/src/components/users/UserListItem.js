import React from 'react';
import {Link} from 'react-router';
import User from './User';

const UserListItem = ({user}) => {
    return (
        <li className="list-group-item"><Link to={'/users/' + user.id}>{user.firstName}</Link></li>
    );
};

export default UserListItem;