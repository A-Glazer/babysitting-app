import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import {Link} from 'react-router-dom'

class SlotCard extends React.Component {
    
    
render() {
    let { id, first_name, last_name, phone_number} = this.props.babysitter 

    // let { id, first_name, last_name, phone_number} = this.props.babysitter 
    return (
        <CardDeck className="card-padding">
            <Card bg="light" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{last_name ? last_name : null}, {first_name ? first_name : null}</Card.Title>
                <Card.Text>{phone_number ? phone_number : null}</Card.Text>
                {/* <Button variant="outline-info" onClick={this.handleOnClick(this.props.babysitter)}>View Availability</Button>{' '} */}
                <Link to={`/babysitters/${id}`}><Button>View Availability</Button></Link>

            </Card.Body>
            </Card>
            
        </CardDeck>
      
    )
}

}

export default SlotCard