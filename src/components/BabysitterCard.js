import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

class BabysitterCard extends React.Component {

    state = {
        upNumber: 0,
        downNumber: 0
    }

    addVote = () => {
        this.setState(({ upNumber }) => {
            return { upNumber: upNumber + 1 }
        })
    }

    addDownVote = () => {
        this.setState(({ downNumber }) => {
            return { downNumber: downNumber + 1 }
        })
    }

    render() {

        let { id, first_name, last_name, phone_number } = this.props.babysitter


        return (
            <div>
                <CardDeck className="card-padding">
                    <Card bg="light" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{last_name}, {first_name}</Card.Title>
                            <Card.Text>{phone_number}</Card.Text>
                            <Link to={{ pathname: `/babysitters/${id}` }}>
                                <Button>View Availability</Button><br />

                            </Link>
                        </Card.Body>
                        <Card.Footer >
                            <InputGroup className="mb-3 justify-content-between">
                                <InputGroup.Prepend>
                                    <Button variant="outline-secondary" onClick={this.addVote}>Like</Button>
                                    <InputGroup.Text>{this.state.upNumber}</InputGroup.Text>
                                </InputGroup.Prepend>
                               
                                <InputGroup.Prepend>
                                    <Button variant="outline-secondary" onClick={this.addDownVote}>Dislike</Button>
                                    <InputGroup.Text>{this.state.downNumber}</InputGroup.Text>
                                </InputGroup.Prepend>
                            </InputGroup>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
        )
    }

}



export default BabysitterCard
