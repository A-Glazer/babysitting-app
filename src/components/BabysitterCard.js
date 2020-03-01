import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import { Link } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import BabysitterShow from './BabysitterShow'


class BabysitterCard extends React.Component {

    //   renderNewPage = (props) => {
    //     <Route path='/babysitters/${id}' render={(routerProps) => 
    //         <BabysitterShow {...routerProps} babysitters={this.props.babysitters} /> }   />
    //   }


    render() {
        let { id, first_name, last_name, phone_number } = this.props.babysitter

        // let { id, first_name, last_name, phone_number} = this.props.babysitter 
        return (
            <div>
                <CardDeck className="card-padding">
                    <Card bg="light" style={{ width: '18rem' }}>
                        {/* <Card.Header>{id ? id : null}</Card.Header> */}
                        <Card.Body>
                            <Card.Title>{last_name ? last_name : null}, {first_name ? first_name : null}</Card.Title>
                            <Card.Text>{phone_number ? phone_number : null}</Card.Text>
                            {/* <Button variant="outline-info" onClick={this.handleOnClick(this.props.babysitter)}>View Availability</Button>{' '} */}


                            <Link to={{
                                pathname: `/babysitters/${id}`,
                                state: { babysitter: this.props.babysitter }
                            }}>
                                <Button>
                                    {/* onClick={this.renderNewPage(props)}> */}
                                    View Availability</Button>
                            </Link>

                        </Card.Body>
                    </Card>

                </CardDeck>
            </div>

        )
    }

}



export default BabysitterCard


// <u>Slots: </u><SlotsContainer babysitter={babysitter} />
// <br/>
// <u>Comments: </u><CommentsContainer babysitter={babysitter}/>