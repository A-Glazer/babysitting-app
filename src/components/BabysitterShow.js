import React from 'react'
import SlotsContainer from '../containers/SlotsContainer'
import Flip from 'react-reveal/Flip';
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'
import { useParams } from 'react-router-dom'

const BabysitterShow = (props) => {
    const { id } = useParams()
    let babysitter = props.babysitters.find(baby => baby.id == id)

    return (
        <div>
            <Flip left>
                <h1 className="flipTitle">{babysitter.last_name}, {babysitter.first_name}</h1>
            </Flip>

            <h4>{babysitter.phone_number}</h4>

            <u>Slots: </u><SlotsContainer babysitter={babysitter} />

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