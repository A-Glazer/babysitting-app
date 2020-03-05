import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import { connect } from 'react-redux'
import { deleteSlot } from '../actions/deleteSlot'
// import Button from 'react-bootstrap/Button'
// import { Link } from 'react-router-dom'
// import { render } from '@testing-library/react'
// import Col from 'react-bootstrap/Col'


const Slots = ({ babysitter, deleteSlot }) => {

    // const {babysitter, deleteBabysitter, babysitterId} = this.props
    // {debugger}
    return (
        <div>
            {/* {let allSlot = babysitter.slots}
            {let slotSet = [...new Set(allSlot)]
            return slotSet */}
            {babysitter.slots.map(slot => { return card(slot) })}
            {/* {babysitter && babysitter.slots.map(slot => { return card(slot) })} */}
        </div>
    )

    function dayToString(day_of_week) {
        console.log("dayToString", day_of_week)
        if (day_of_week === 0) {
            return "Sunday"
        } else if (day_of_week === 1) {
            return "Monday"
        } else if (day_of_week === 2) {
            return "Tuesday"
        } else if (day_of_week === 3) {
            return "Wednesday"
        } else if (day_of_week === 4) {
            return "Thursday"
        } else if (day_of_week == 5) {
            return "Friday"
        } else if (day_of_week === 6) {
            return "Saturday"
        }
    }

    function timeToString(time_of_day) {
        // debugger

        console.log("timeToString", time_of_day)
        if (time_of_day === 0) {
            return "Morning"
        } else if (time_of_day === 1) {
            return "Afternoon"
        } else if (time_of_day === 2) {
            return "Evening"
        }
    }

    function removeSlot(slot, babysitter) {
        debugger
        deleteSlot(slot, babysitter)
    }

    function card(slot) {
        console.log("card slot", slot)
        return (
            <Row className="babyCard">
                <CardDeck className="card-padding date-cards">
                    <Card bg="light" style={{ width: '14rem' }}>
                        <Card.Header>{dayToString(slot.day_of_week)}</Card.Header>
                        <ListGroup variant="info">
                            <ListGroup.Item>
                                {theSlot(slot.time_of_day)}
                            <button variant="link" size="sm" className="reset-button" onClick={() => removeSlot(slot, babysitter)}>Reset {dayToString(slot.day_of_week)}</button>
                            </ListGroup.Item>
                        </ListGroup>
                        {/* <Card.Footer className="text-muted reset-button"> */}
                        {/* </Card.Footer> */}
                    </Card>
                </CardDeck>
            </Row >
        )
        // }
    }

    function theSlot(time_of_day) {
        console.log("theSlot", time_of_day)
        return <div>{time_of_day.map(time => {
            if (time === 0) {
                return <li>Morning</li>
            } else if (time === 1) {
                return <li>Afternoon</li>
            } else if (time === 2) {
                return <li>Evening</li>
            }
        })
        }
        </div>
    }
}

export default connect(null, { deleteSlot })(Slots)


// babysitter={this.props.babysitter}
// deleteBabysitter={this.props.deleteBabysitter}
// babysitterId={this.props.babysitter.id}