import React from 'react'
// import {Route, Link} from 'react-router-dom'
// import BabysitterShow from './BabysitterShow'
import BabysitterCard from './BabysitterCard'
// import { Container, Row, Col } from 'reactstrap';
import Row from 'react-bootstrap/Row'
import Flip from 'react-reveal/Flip';

const Babysitters = ({babysitters}) => {
    let babysitterCards = babysitters.map(baby => {
        
            return (
                <div>
                    <BabysitterCard key={baby.id} babysitter={baby}/>
                <br/>
                </div>
                )
       
        })
        

        return(
            <div>
            <Flip left >
                <h1 className="flipTitle">Babysitter List </h1>
            </Flip>
            <Row className="babyCard">
                {babysitterCards}
            </Row>
            </div>
        )
    }
  

export default Babysitters

// import Flip from 'react-reveal/Flip';
// <div>
// <Flip left>
//     <h1>Babysitter List </h1>
// </Flip>