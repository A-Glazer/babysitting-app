import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import { Link } from 'react-router-dom'

class BabysitterCard extends React.Component {

    render() {

        let { id, first_name, last_name, phone_number } = this.props.babysitter

        return (
            <div>
                <CardDeck className="card-padding">
                    <Card bg="light" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{last_name}, {first_name}</Card.Title>
                            <Card.Text>{phone_number}</Card.Text>
                            <Link to={{pathname: `/babysitters/${id}`}}>
                                <Button>View Availability</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        )
    }

}



export default BabysitterCard
