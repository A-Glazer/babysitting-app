import React from 'react'
// import CommentsContainer from '../containers/CommentsContainer'
import SlotsContainer from '../containers/SlotsContainer'
import Flip from 'react-reveal/Flip';
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'

import { useParams } from 'react-router-dom'
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'


const BabysitterShow = (props) => {
    const { id } = useParams()
    let babysitter = props.babysitters.find(baby => baby.id == id)
    console.log("props on show", props)

    return (
        <div>
            <Flip left>
                <h1 className="flipTitle">{babysitter.last_name}, {babysitter.first_name}</h1>
            </Flip>

            <h4>{babysitter.phone_number}</h4>

            <u>Slots: </u><SlotsContainer babysitter={babysitter} />

            <br />
            <h4>Would you like to: </h4>
            <Button variant="outline-info" className="button-padding">Edit Babysitter</Button>
            {/* <Button variant="outline-info" className="button-padding" onClick={this.handleRemoval()}>Remove Babysitter</Button> */}

            {/* <u>Comments: </u><CommentsContainer babysitter={babysitter} /> */}
        </div>
    )


    // function handleRemoval() {
    //     { this.props.deleteBabysitter(babysitter.id) }
    // }
}


const mapStateToProps = state => {
    return {
        babysitters: state.babysitters,
        loading: state.loading
    }
}


export default connect(mapStateToProps)(BabysitterShow)