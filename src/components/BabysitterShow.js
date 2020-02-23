import React from 'react'
import {Redirect} from 'react-router-dom'
import CommentsContainer from '../containers/CommentsContainer'
import SlotsContainer from '../containers/SlotsContainer'

const BabysitterShow = (props) => {
    // let babysitter = props.babysitters[props.match.params.id -1]
    let babysitter = props.babysitters.filter(baby => baby.id == props.match.params.id)[0]
    console.log(babysitter)

    return (
        <div>
            <h2>{babysitter ? babysitter.last_name : null}, {babysitter ? babysitter.first_name : null}</h2>
            <h4>{babysitter ? babysitter.phone_number : null}</h4>
            <CommentsContainer babysitter={babysitter}/>
            <SlotsContainer babysitter={babysitter} />
        </div>
    )
}

export default BabysitterShow