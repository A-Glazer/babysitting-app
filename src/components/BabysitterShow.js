import React from 'react'
import CommentsContainer from '../containers/CommentsContainer'
import SlotsContainer from '../containers/SlotsContainer'
import Flip from 'react-reveal/Flip';
import {connect} from 'react-redux'

import {useParams} from 'react-router-dom'
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'


const BabysitterShow = (props) => {
    const {id} = useParams()
    // let babysitter = props.babysitters
    let babysitter = props.babysitters.find(baby => baby.id == id)
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

const mapStateToProps = state => {
    return {
        babysitters: state.babysitters,
        loading: state.loading
    }
}


export default connect(mapStateToProps)(BabysitterShow)