import React from 'react';
// import { Card, CardImg, CardText, CardBlock,
//   CardTitle, CardSubtitle, Button } from 'reactstrap';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'

class BabysitterCard extends React.Component {
    
    
render() {
    let { first_name, last_name, phone_number} = this.props.babysitter 

    // let { id, first_name, last_name, phone_number} = this.props.babysitter 
    return (
        <div>
        <CardDeck ml-1>
            <Card bg="light" style={{ width: '18rem' }}>
            {/* <Card.Header>{id ? id : null}</Card.Header> */}
            <Card.Body>
                <Card.Title>{last_name ? last_name : null}, {first_name ? first_name : null}</Card.Title>
                <Card.Text>{phone_number ? phone_number : null}</Card.Text>
                <Button variant="primary">View Availability</Button>
            </Card.Body>
            </Card>
        </CardDeck>
        </div>
    )
}

}

export default BabysitterCard

// {babysitter ? babysitter.last_name : null}