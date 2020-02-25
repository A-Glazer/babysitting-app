import React from 'react';
// import { Card, CardImg, CardText, CardBlock,
//   CardTitle, CardSubtitle, Button } from 'reactstrap';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import {Link, Route, Switch} from 'react-router-dom'
import BabysitterShow from '../components/BabysitterShow'

class BabysitterCard extends React.Component {
    
    handleOnClick = (babysitter) => {
        console.log("This was clicked" )
    }

    
render() {
    let { id, first_name, last_name, phone_number} = this.props.babysitter 

    // let { id, first_name, last_name, phone_number} = this.props.babysitter 
    return (
        <CardDeck>
            <Card bg="light" style={{ width: '18rem' }}>
            {/* <Card.Header>{id ? id : null}</Card.Header> */}
            <Card.Body>
                <Card.Title>{last_name ? last_name : null}, {first_name ? first_name : null}</Card.Title>
                <Card.Text>{phone_number ? phone_number : null}</Card.Text>
                {/* <Button variant="outline-info" onClick={this.handleOnClick(this.props.babysitter)}>View Availability</Button>{' '} */}
                <Link to={`/babysitters/${id}`} >View Availability</Link>

            </Card.Body>
            </Card>
            
        </CardDeck>
      
    )
}

}

export default BabysitterCard

// {babysitter ? babysitter.last_name : null}