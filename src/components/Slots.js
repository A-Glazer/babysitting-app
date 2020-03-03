import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import { render } from '@testing-library/react'
import Col from 'react-bootstrap/Col'


const Slots = ({ babysitter }) => {

    console.log("this is props", babysitter)

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

    function timeToString(time_of_day) {
        if (time_of_day === 0) {
            return "Morning"
        } else if (time_of_day === 1) {
            return "Afternoon"
        } else if (time_of_day === 2) {
            return "Evening"
        }
    }

    const theSlot = slot => slot.time_of_day.map(time => <div>{timeToString(time)}</div>)

    function card(slot) {
        // if (slot.time_of_day || slot.time_of_day.length > 0) {
        return (
            <Row className="babyCard">
                <CardDeck className="card-padding date-cards">
                    <Card bg="light" style={{ width: '14rem' }}>
                        <Card.Header>{dayToString(slot.day_of_week)}</Card.Header>
                        <ListGroup variant="info">
                            <ListGroup.Item>
                                {theSlot(slot)}
                                {/* {slot.time_of_day.map(time =><div>{timeToString(time)}</div>)} */}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </CardDeck>
            </Row >
        )
        // }
    }

    return (
        <div>
            {/* {console.log("babysitter", babysitter)} */}
            {babysitter && babysitter.slots.map(slot => {return card(slot)})}
        </div>
    )

}
export default Slots
