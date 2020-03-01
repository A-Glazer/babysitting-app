import React from 'react'
import CommentsContainer from '../containers/CommentsContainer'
import SlotsContainer from '../containers/SlotsContainer'
import Flip from 'react-reveal/Flip';

// import {Redirect} from 'react-router-dom'
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'


const BabysitterShow = (props) => {

    let babysitter = props.babysitters.filter(baby => baby.id == props.match.params.id)[0]
    // console.log("babysitter on babysitter show", props)
    return (
        <div>
            <Flip left>
                <h1 className="flipTitle">{babysitter ? babysitter.last_name : null}, {babysitter ? babysitter.first_name : null}</h1>
            </Flip>
            <h4>{babysitter ? babysitter.phone_number : null}</h4>
            <u>Slots: </u><SlotsContainer babysitter={babysitter} />
            <br />
            <u>Comments: </u><CommentsContainer babysitter={babysitter} />
        </div>
    )
}

export default BabysitterShow