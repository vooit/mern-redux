import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/usersActions'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            user: this.props.user,
        };
        this.onDeleteUser = this.onDeleteUser.bind(this);
    }

    onDeleteUser() {
        console.log(this.state.user);
        this.props.actions.deleteUser(this.state.user)
    }

    render() {
        return (
            <div className="col-md-8 col-md-offset-2">
                <h1>User Data</h1>
                <p>first name: {this.props.user.firstName}</p>
                <p>last name: {this.props.user.lastName}</p>
                <p>email: {this.props.user.email}</p>
                <p>event date: {this.props.user.eventDate}</p>
                <br/>
                <button
                    onClick={this.onDeleteUser}
                    className="btn btn-primary">
                    delete
                </button>
            </div>
        );
    }
};


function mapStateToProps(state, ownProps) {

    let user = {firstName: '', lastName: '', email: '', eventDate: ''};
    const userId = ownProps.params.id;
    if (userId && state.users.length > 0) {
        user = state.users.find(user => user._id === userId);
    }
    return {user: user};
}



export default connect(mapStateToProps)(User);
