import React from 'react'
import {connect} from 'react-redux'
import {addSlot} from '../actions/addSlot'

class SlotInput extends React.Component {

state= {
   day_of_week: 'Sunday',
   time_of_day: 'Morning' 
}

handleOnChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleOnSubmit = event => {
    event.preventDefault()
    this.props.addSlot(this.state, this.props.babysitter.id)
    this.setState({
        day_of_week: 'Sunday',
        time_of_day: 'Morning' 
    })
}


    render() {
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Day Availability: </label>
                    {/* checkboxes of each day */}
                    <select name="day_of_week" value={this.state.day_of_week} onChange={this.handleOnChange}>
                        <option>Sunday</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                    </select>
                    <label>Time Availability: </label>
                    <select name="time_of_day" value={this.state.time_of_day} onChange={this.handleOnChange}>
                        {/* need to iterate over times */}
                       <option>Morning</option> 
                       <option>Afternoon</option>
                       <option>Evening</option>
                    </select>
                    <input type="submit"/>
                </form>
            </div>
        )
    }

}

export default connect(null, {addSlot})(SlotInput)

// t.integer "day_of_week"
// t.integer "time_of_day"