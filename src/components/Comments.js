import React from 'react'

const Comments = (props) => {

    return (
        <div>
            {props.comments && props.comments.map(comment =>
                <li key={comment.id}>{comment.message} - 
                    <i>{comment.name ? comment.name : null} </i></li>
                
            )}
        </div>
    )

}

export default Comments