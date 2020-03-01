import React from 'react'
import CommentInput from '../components/CommentInput'
import Comments from '../components/Comments'

class CommentsContainer extends React.Component {

    render() {
        // console.log(this.props.babysitter)
        return (
            <div>
                <CommentInput babysitter={this.props.babysitter} />
                <Comments comments={this.props.babysitter && this.props.babysitter.comments} />
            </div>
        )
    }





}

export default CommentsContainer 