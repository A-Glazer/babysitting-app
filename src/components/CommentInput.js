import React from 'react'
import {connect} from 'react-redux'
import {addComment} from '../actions/addComment'

class CommentInput extends React.Component {

    state = {
        name: '',
        message: ''        
    }

    handleOnChange = event => {
       this.setState({
           [event.target.name]: event.target.value

       })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.addComment(this.state, this.props.babysitter.id)
        this.setState({
            name: '',
            message: ''
        })
        
    }

    render(){
        return(
            <div>
               <form onSubmit={this.handleOnSubmit}>
                    <label>Message: </label>
                    <input type="text" placeholder="Message" value={this.state.message} name="message" onChange={this.handleOnChange} />
                    <br/><br/>
                    <label>Name: (optional) </label>
                    <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleOnChange}/>
                    <br/><br/>
                    <input type="submit" />
                </form> 
            </div>
        )

    }
}

export default connect(null, {addComment})(CommentInput)
