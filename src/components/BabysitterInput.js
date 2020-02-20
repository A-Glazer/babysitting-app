import React from 'react'


export default class BabysitterInput extends React.Component {

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

    render() {
        return(
            <div>
                <form >
                    <label>First Name: </label>
                    <input type="text" placeholder="First Name" value={this.state.first_name} name="first_name" onChange={this.handleOnChange} />
                    <br/><br/>
                    <label>Last Name: </label>
                    <input type="text" placeholder="Last Name" value={this.state.last_name} name="last_name" onChange={this.handleOnChange}/>
                    <br/><br/>
                    <label>Phone Number: </label>
                    <input type="text" placeholder="Phone Number" value={this.state.phone_number} name="phone_number" onChange={this.handleOnChange}/>
                </form>
            </div>
        )
    }
}