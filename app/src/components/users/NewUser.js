import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Form from './Form';
import * as actions from '../../actions/usersActions';
// import FormValidator from '../utils/FormValidator';

class NewUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                eventDate: ''
            },
            isValid: false,
            isEmailValid: false,
            saving: false
        };
        this.saveUser = this.saveUser.bind(this);
        this.updateUserState = this.updateUserState.bind(this);
    }

    saveUser(event) {
        console.log('save action');
        event.preventDefault();
        this.props.actions.postUser(this.state.user);
    }

    validator = {
        validateEmail(state) {
            if (state.length && state.indexOf("@") !== -1) {
                return true
            }
            else return false
        },
        validateString(state) {
            if (state.length) {
                return true
            }
            else return false
        }
    };


    updateUserState(event) {
        const field = event.target.name;
        let user = this.state.user;
        user[field] = event.target.value;
        this.setState({user: user});
        if (user['email'].length > 1 &&
            user['email'].indexOf("@") === -1) {
            this.setState({isEmailValid: true})
        }
        else {
            this.setState({isEmailValid: false})
        }
        if (this.validator.validateString(this.state.user.firstName) &&
            this.validator.validateString(this.state.user.lastName) &&
            this.validator.validateEmail(this.state.user.email)
        ) {
            this.setState({isValid: true})
            console.log(this.state.isValid);
        }
    }

    render() {
        return (
            <div>
                <h1>new user</h1>
                <Form
                    user={this.state.user}
                    saving={this.state.saving}
                    emailValid={this.state.isEmailValid}
                    valid={this.state.isValid}
                    onSave={this.saveUser}
                    onChange={this.updateUserState}
                />
                {this.state.user.firstName}
                <br/>
                {this.state.user.lastName}
                <br/>
                {this.state.user.email}
                <br/>
                {this.state.user.eventDate}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(NewUser);