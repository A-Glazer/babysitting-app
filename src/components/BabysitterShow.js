import React from 'react'
import CommentsContainer from '../containers/CommentsContainer'
import SlotsContainer from '../containers/SlotsContainer'
// import {Redirect} from 'react-router-dom'
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'


const BabysitterShow = (props) => {
    let babysitter = props.babysitters.filter(baby => baby.id == props.match.params.id)[0]

    return (
        <div>
            <h2>{babysitter ? babysitter.last_name : null}, {babysitter ? babysitter.first_name : null}</h2>
            <h4>{babysitter ? babysitter.phone_number : null}</h4>
            <u>Slots: </u><SlotsContainer babysitter={babysitter} />
            <br/>
            <u>Comments: </u><CommentsContainer babysitter={babysitter}/>
        </div>
    )
}

export default BabysitterShow