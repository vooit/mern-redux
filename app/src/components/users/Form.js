import React from 'react';
import TextInput from './TextInput';
import 'react-dates/lib/css/_datepicker.css';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';
import moment from 'moment';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment(),
            focused: null
        }
    }

    handleDateChange(date) {
        this.setState({date: date})
        this.props.user.eventDate = this.state.date
    }

    render() {

        return (
            <div className="col-12">
                <form>

                    <TextInput
                        name="firstName"
                        label="First Name"
                        value={this.props.user.firstName}
                        onChange={this.props.onChange}/>

                    <TextInput
                        name="lastName"
                        label="Last Name"
                        value={this.props.user.lastName}
                        onChange={this.props.onChange}/>

                    <TextInput
                        name="email"
                        label="Email"
                        value={this.props.user.email}
                        onChange={this.props.onChange}/>
                    {this.props.emailValid ?
                        <span className="alert alert-danger">Email is required an must contain "@"</span> : null}
                    <br/>
                    <SingleDatePicker
                        // showClearDate={true}

                        customInputIcon={
                            <img src="https://image.flaticon.com/icons/svg/747/747310.svg"
                                 width="20"
                                 height="20"
                                 alt="Calendar free icon"
                                 title="Calendar"></img>
                        }
                        inputIconPosition="after"
                        small={true}
                        block={false}
                        numberOfMonths={1}
                        date={this.state.date}
                        onDateChange={date => this.handleDateChange(date)}
                        focused={this.state.focused}
                        onFocusChange={({focused}) =>
                            this.setState({focused})
                        }
                        openDirection="up"
                        hideKeyboardShortcutsPanel={true}
                    />
                    <br/>
                    <input
                        type="submit"
                        className="btn btn-primary"
                        disabled={!this.props.valid}
                        value={this.props.saving ? 'Saving...' : 'Save'}
                        onClick={this.props.onSave}/>

                </form>
                <p>is Valid {this.props.valid}</p>
            </div>
        );
    }
}


export default Form;



