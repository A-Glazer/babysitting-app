import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import { connect } from 'react-redux'
import { deleteSlot } from '../actions/deleteSlot'

const Slots = ({ babysitter, deleteSlot }) => {

    return (
        <div>
            {babysitter.slots.map(slot => { return card(slot) })}
        </div>
    )

    function dayToString(day_of_week) {
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

    function removeSlot(slot, babysitter) {
        deleteSlot(slot, babysitter)
    }

    function card(slot) {
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
                    </Card>
                </CardDeck>
            </Row >
        )
    }

    function theSlot(time_of_day) {
        return <div>{time_of_day.map(time => {
            if (time.time === 0) {
                return <li>Morning</li>
            } else if (time.time === 1) {
                return <li>Afternoon</li>
            } else if (time.time === 2) {
                return <li>Evening</li>
            }
        })
        }
        </div>
    }
}

const mapStateToProps = state => {
    return {
        babysitters: state.babysitters,
        loading: state.loading
    }
}

export default connect(mapStateToProps, { deleteSlot })(Slots)
