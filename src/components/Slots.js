import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
// import Button from 'react-bootstrap/Button'
// import { Link } from 'react-router-dom'
// import { render } from '@testing-library/react'
// import Col from 'react-bootstrap/Col'


const Slots = ({ babysitter }) => {

    console.log("this is babysitter on own", babysitter)

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

    function theSlot(slot) {
        if (slot.time_of_day) {
            return <div>{slot.time_of_day.map(time => {
                if (time === 0) {
                    return <li>Morning</li>
                } else if (time === 1) {
                    return <li>Afternoon</li>
                } else if (time === 2) {
                    return <li>Evening</li>
                }
            }
            )}</div>
        }
    }

    function card(slot) {
        // if (slot.time_of_day || slot.time_of_day.length > 0) {
        // if (slot.time_of_day.length > 0) {
        return (
            <Row className="babyCard">
                <CardDeck className="card-padding date-cards">
                    <Card bg="light" style={{ width: '14rem' }}>
                        <Card.Header>{dayToString(slot.day_of_week)}</Card.Header>
                        <ListGroup variant="info">
                            <ListGroup.Item>
                                {theSlot(slot)}
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
            {babysitter && babysitter.slots.map(slot => { return card(slot) })}
        </div>
    )

}
export default Slots
