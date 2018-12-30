import React from 'react';
import {Link, IndexLink} from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Header = () => {
    return (

        <AppBar position="static">
            <Toolbar>
                <IndexLink to="/" activeClassName="active">
                    <span className="btn btn-success">Home</span>
                </IndexLink>
                <Link to="/users" activeClassName="active">  <span className="btn btn-success ml-4">Users</span></Link>
            </Toolbar>
        </AppBar>
    );
};

export default Header;