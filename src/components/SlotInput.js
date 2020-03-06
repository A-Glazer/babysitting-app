import React from 'react'
import { connect } from 'react-redux'
import { addSlot } from '../actions/addSlot'

class SlotInput extends React.Component {

    state = {
        day_of_week: '',
        time_of_day: ''
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    validateForm(event) {
        if (event.target.day_of_week.value === 'Select Day' || event.target.day_of_week.value === '' || event.target.time_of_day.value === '' || event.target.time_of_day.value === 'Select Time') {
            alert("Please select a day and time")

        }
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.validateForm(event)
        this.props.addSlot(this.state, this.props.babysitter)
        this.setState({
            day_of_week: '',
            time_of_day: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label className="addSpace">Day Availability: </label>
                    <select name="day_of_week" value={this.state.day_of_week} onChange={this.handleOnChange} required min="0" max="6" >
                        <option>Select Day</option>
                        <option value="0" key={0}>Sunday</option>
                        <option value="1" key={1}>Monday</option>
                        <option value="2" key={2}>Tuesday</option>
                        <option value="3" key={3}>Wednesday</option>
                        <option value="4" key={4}>Thursday</option>
                        <option value="5" key={5}>Friday</option>
                        <option value="6" key={6}>Saturday</option>
                    </select>

                    <label className="addSpace">Time Availability: </label>
                    <select name="time_of_day" value={this.state.time_of_day} onChange={this.handleOnChange} required min="0" max="2">
                        <option>Select Time</option>
                        <option value="0" key={0}>Morning</option>
                        <option value="1" key={1}> Afternoon</option>
                        <option value="2" key={2}>Evening</option>
                    </select>
                    <label className="addSpace">    </label>
                    <input type="submit" />
                </form>
            </div >
        )
    }
}

export default connect(null, { addSlot })(SlotInput)
