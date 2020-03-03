import React from 'react'
import { Link } from 'react-router-dom'
import BabysitterCard from './BabysitterCard'
import Row from 'react-bootstrap/Row'
import Flip from 'react-reveal/Flip'
import Button from 'react-bootstrap/Button'
// import BabysitterShow from './BabysitterShow'
// import { Container, Row, Col } from 'reactstrap';

const Babysitters = ({ babysitters }) => {
    let babysitterCards = babysitters.map(baby => {
        // debugger
        return (
            <div key={baby.id}>
                <BabysitterCard babysitter={baby} />
                <br />
            </div>
        )
    })

    return (
        <div>
            <Flip left >
                <h1 className="flipTitle">Babysitter List </h1>
            </Flip>
            <Row className="babyCard">
                {babysitterCards}
            </Row>
            <Button variant="outline-info"><Link to="/babysitters/new" >Create New Babysitter</Link></Button>{' '}

        </div>
    )
}


export default Babysitters
