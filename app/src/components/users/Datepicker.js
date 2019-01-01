import React from 'react';
import 'react-dates/lib/css/_datepicker.css';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';
import moment from "moment";


class Datepicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            focused: null,
            date: moment(),
            transformedDate: ''
        }
    }

    handleDateChange(date) {
        this.setState({date: date});
        this.setState({transformedDate: moment(date).format('YYYY-MM-DD')});
        this.props.onChange(this.state.transformedDate);
    }


    render() {

        return (
            <SingleDatePicker
                showClearDate={false}
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
                required= {true}
                numberOfMonths={1}
                date={this.state.date}
                onDateChange={date => this.handleDateChange(date)}
                focused={this.state.focused}
                onFocusChange={({focused}) =>
                    this.setState({focused})
                }
                openDirection="down"
                hideKeyboardShortcutsPanel={true}
            />
        )
    }
}

export default Datepicker;