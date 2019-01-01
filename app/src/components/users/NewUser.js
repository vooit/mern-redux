import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Form from './Form';
import * as actions from '../../actions/usersActions';
import Validator from '../utils/Validator';

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
            isDateValid: false
        };
        this.saveUser = this.saveUser.bind(this);
        this.updateUserState = this.updateUserState.bind(this);
        this.updateDate = this.updateDate.bind(this)
    }

    updateDate(date) {
        let user = this.state.user;
        user['eventDate'] = date;
        console.log('result after date picker: ', user['eventDate']);
        Validator.validateDate(date);
        if (Validator.validateDate(date) === true) {
            this.setState({isDateValid: true})
            console.log("isDateValid: ", this.state.isDateValid)
        }
        else {
            this.setState({isDateValid: false})
            console.log("isDateValid: ", this.state.isDateValid)
        }
    }

    saveUser(event) {
        event.preventDefault();
        this.props.actions.postUser(this.state.user);
    }

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

        if (Validator.validateString(this.state.user.firstName) &&
            Validator.validateString(this.state.user.lastName) &&
            Validator.validateEmail(this.state.user.email) &&
            Validator.validateDate(this.state.user.eventDate)
        ) {
            this.setState((state) => ({isValid: true}))
        }
        else {
            this.setState((state) => ({isValid: false}))
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
                    dateHandler={this.updateDate}
                    eventDate={this.state.eventDate}
                    onChange={this.updateUserState}
                />
                <br/>
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