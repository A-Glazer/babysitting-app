import React from 'react'
import {Redirect} from 'react-router-dom'
import CommentsContainer from '../containers/CommentsContainer'

const BabysitterShow = (props) => {
    let babysitter = props.babysitters[props.match.params.id -1]

    console.log(props)
    // function babysitterExist(){
    //     if (babysitter)
    // }


    return (
        <div>
            <h2>{babysitter ? babysitter.last_name : null}, {babysitter ? babysitter.first_name : null}</h2>
            <h4>{babysitter ? babysitter.phone_number : null}</h4>
            <CommentsContainer babysitter={babysitter}/>
        </div>
    )
}

export default BabysitterShow