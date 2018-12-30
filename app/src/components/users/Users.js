import React from 'react';
import UsersList from './UsersList';
import {connect} from 'react-redux';
import {Link} from 'react-router';
// import {bindActionCreators} from 'redux';
// import * as usersActions from '../../actions/usersActions';
// import NewUser from './NewUser';
// import * as actions from '../../actions/userActions';

class Users extends React.Component {


    render() {
        const users = this.props.users;

        return (
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Users
                            <Link to={'/users/new'}
                                  className="btn btn-primary ml-4">add new user</Link>
                        </h1>
                        <UsersList users={users}/>
                    </div>
                    <div className="col-md-6">
                        {this.props.children}
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({users: state.users});

export default connect(mapStateToProps)(Users);