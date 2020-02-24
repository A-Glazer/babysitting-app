import React from 'react'
import {connect} from 'react-redux'
import {addBabysitter} from '../actions/addBabysitter'
// import SlotInput from './SlotInput'

 class BabysitterInput extends React.Component {

    state = {
        first_name: '',
        last_name: '',
        phone_number: ''
    }

    handleOnChange = event => {
       this.setState({
           [event.target.name]: event.target.value

       })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.addBabysitter(this.state)
        this.setState({
            first_name: '',
            last_name: '',
            phone_number: ''
        })
        this.props.history.push('/babysitters')
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleOnSubmit} >
                    <label>First Name: </label>
                    <input type="text" placeholder="First Name" value={this.state.first_name} name="first_name" onChange={this.handleOnChange} />
                    <br/><br/>
                    <label>Last Name: </label>
                    <input type="text" placeholder="Last Name" value={this.state.last_name} name="last_name" onChange={this.handleOnChange}/>
                    <br/><br/>
                    <label>Phone Number: </label>
                    <input type="text" placeholder="Phone Number" value={this.state.phone_number} name="phone_number" onChange={this.handleOnChange}/>
                    <br/><br/>
                    {/* <SlotInput babysitter={this.props.babysitter}/> */}
                    <input type="submit"/>
                    
                </form>
            </div>
        )
    }
}

export default connect(null, {addBabysitter})(BabysitterInput)
// doesnt need anything from the store, only add new to store