import React from 'react'
import {connect} from 'react-redux'
import {deleteComment} from '../actions/deleteComment'

const Comments = (props) => {

    const handleDelete = (comment) => {
        props.deleteComment(comment.id, comment.babysitter_id)
    }

    return (
        <div>
            {props.comments && props.comments.map(comment =>
                <li key={comment.id}>{comment.message} - 
                    <i>{comment.name ? comment.name : null} </i>
                    <br/><button onClick={() => handleDelete(comment)}>Delete</button>    
                </li>
                
            )}
        </div>
    )

}

export default connect(null, {deleteComment})(Comments)