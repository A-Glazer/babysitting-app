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

    function card(slot) {
        return (
            <Row className="babyCard">
                <CardDeck className="card-padding date-cards">
                    <Card bg="light" style={{ width: '14rem' }}>
                        <Card.Header>{dayToString(slot.day_of_week)}</Card.Header>
                        <ListGroup variant="info">
                            <ListGroup.Item>
                                {slot.time_of_day.map(time =>
                                    <div>{timeToString(time)}</div>)
                                }
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </CardDeck>
            </Row >

        )
    }


    return (

        <div>
            {babysitter.slots.map(slot => { return card(slot) })}
        </div>
    )

}
export default Slots































// let bigSlots = props.slots && props.slots.map(slot => slot)
// let times = Object.values(bigSlots.filter(data => data))
// return (
//     <div>
//         {times}
//     </div>
//     )
// slot {id: 7, day_of_week: 6, time_of_day: 2, babysitter_id: 1}

// console.log("slotBig is", slotBig)








//     <div>
//     {console.log("this is slots", props.slots)}
//  {props.slots && props.slots.map(slot =>
//  console.log("this is slot", slot),
//  let slotsArr = Object.values(slot.filter(slot => slot.day_of_week === 0))
//  )}
// return(

//     </div>
//  )

//  return (
// <div>
{/* <Row className="slot-card-padding"> */ }
{/* idea #1 */ }

{/* Sunday */ }
{/* {props.slots && props.slots.map(slot => 
                {if (slot.day_of_week === 0) {
                return(
                    <Card style={{ width: '18rem' }}>
                    <Card.Header>Sunday</Card.Header>
                    <ListGroup variant="info">
                    <ListGroup.Item>
                    {(timeToString(slot.time_of_day))}
                        </ListGroup.Item>
                    
                </ListGroup>
                </Card>
                )
             }}
             )}  */}
{/* Monday */ }
{/* {props.slots && props.slots.map(slot =>
                {if (slot.day_of_week === 1) {
                return(
                    <Card style={{ width: '18rem' }}>
                    <Card.Header>Monday</Card.Header>
                    <ListGroup variant="info">
                    <ListGroup.Item>
                    {(timeToString(slot.time_of_day))}
                        </ListGroup.Item>
                    
                </ListGroup>
                </Card>
                )
             }}
             )}  */}
{/* Tuesday */ }
{/* {props.slots && props.slots.map(slot =>
                {if (slot.day_of_week === 2) {
                return(
                    <Card style={{ width: '18rem' }}>
                    <Card.Header>Tueday</Card.Header>
                    <ListGroup variant="info">
                    <ListGroup.Item>
                    {(timeToString(slot.time_of_day))}
                        </ListGroup.Item>
                    
                </ListGroup>
                </Card>
                )
            }}
            )} */}

{/* Wednesday */ }
{/* {props.slots && props.slots.map(slot =>
                {if (slot.day_of_week === 3) {
                return(
                    <Card style={{ width: '18rem' }}>
                    <Card.Header>Wednesday</Card.Header>
                    <ListGroup variant="info">
                    <ListGroup.Item>
                    {(timeToString(slot.time_of_day))}
                        </ListGroup.Item>
                    
                </ListGroup>
                </Card>
                )
             }}
             )} */}
{/* Thursday */ }
{/* {props.slots && props.slots.map(slot =>
                {if (slot.day_of_week === 4) {
                return(
                    <Card style={{ width: '18rem' }}>
                    <Card.Header>Thursday</Card.Header>
                    <ListGroup variant="info">
                    <ListGroup.Item>
                    {(timeToString(slot.time_of_day))}
                        </ListGroup.Item>
                    
                </ListGroup>
                </Card>
                )
             }}
             )} */}
{/* Friday */ }
{/* {props.slots && props.slots.map(slot =>
                {if (slot.day_of_week === 5) {
                return(
                    <Card style={{ width: '18rem' }}>
                    <Card.Header>Friday</Card.Header>
                    <ListGroup variant="info">
                    <ListGroup.Item>
                    {(timeToString(slot.time_of_day))}
                        </ListGroup.Item>
                </ListGroup>
                </Card>
                )
             }}
             )} */}
{/* Saturday */ }
// return(


{/*   timeToString(slot.time_of_day)
     
          }
               {if (slot.day_of_week === 6) { 
            //     return(
            //         <Card style={{ width: '18rem' }}>
            //         <Card.Header>Saturday</Card.Header>
            //         <ListGroup variant="info">
            //         <ListGroup.Item>
            //         {(timeToString(slot.time_of_day))}
            //             </ListGroup.Item>
                    
            //     </ListGroup>
            //     </Card>
            //     )
            //  }}
            //  )}
             </div>
        )
             {/* end of idea #1 */}
{/* ) */ }
{/* </Row> */ }


{/* idea #2 */ }



{/* end of idea #2 */ }







// const captionsPG = Object.values(state.all.filter(c => c.rating === "PG"))
