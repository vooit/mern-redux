import React from 'react';
import 'react-dates/lib/css/_datepicker.css';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';


const DatePicker = (props) =>{
    return (
        <SingleDatePicker
            // showClearDate={true}
            customInputIcon={
                <img src="https://image.flaticon.com/icons/svg/747/747310.svg"
                     width="20"
                     height="20"
                     alt="Calendar free icon"
                     title="Calendar"></img>
            }
            className="form-control"
            inputIconPosition="after"
            small={true}
            block={false}
            numberOfMonths={1}
            date={props.eventDate}
            onDateChange={date => props.handleDateChange(date)}
            focused={props.focused}
            // onFocusChange={({focused}) =>
            //     this.setState({focused})
            // }
            openDirection="up"
            hideKeyboardShortcutsPanel={true}
        />
    )
}
export default DatePicker;