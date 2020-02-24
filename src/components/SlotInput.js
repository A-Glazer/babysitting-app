import React from 'react'
import {connect} from 'react-redux'
import {addSlot} from '../actions/addSlot'

class SlotInput extends React.Component {

state= {
   day_of_week: '',
   time_of_day: '' 
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
        day_of_week: '',
        time_of_day: '' 
    })
}

    render() {
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Day Availability: </label>
                    <select name="day_of_week" value={this.state.day_of_week} onChange={this.handleOnChange}>
                        <option>Select Day</option>
                        <option value="0" key={0}>Sunday</option>
                        <option value="1" key={1}>Monday</option>
                        <option value="2" key={2}>Tuesday</option>
                        <option value="3" key={3}>Wednesday</option>
                        <option value="4" key={4}>Thursday</option>
                        <option value="5" key={5}>Friday</option>
                        <option value="6" key={6}>Saturday</option>
                    </select>
                    <label>Time Availability: </label>
                    <select name="time_of_day" value={this.state.time_of_day} onChange={this.handleOnChange}>
                        {/* need to iterate over times */}
                       <option>Select Time</option>
                       <option value="0" key={0}>Morning</option> 
                       <option value="1" key={1}> Afternoon</option>
                       <option value="2" key={2}>Evening</option>
                    </select>
                    <input type="submit"/>
                </form>
            </div>
        )
    }

}

export default connect(null, {addSlot})(SlotInput)
