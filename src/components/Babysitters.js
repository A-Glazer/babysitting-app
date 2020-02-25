import React from 'react'
// import {Route, Link} from 'react-router-dom'
// import BabysitterShow from './BabysitterShow'
import BabysitterCard from './BabysitterCard'
// import { Container, Row, Col } from 'reactstrap';
import Row from 'react-bootstrap/Row'

const Babysitters = ({babysitters}) => {
    let babysitterCards = babysitters.map(baby => {
        
            return (
                <div>
                {/* <Row sm={4} className="babyCard"> */}
                    <BabysitterCard key={baby.id} babysitter={baby}/>
                {/* </Row> */}
                <br/>
                </div>
                )
       
        })
        

        return(
            <Row className="babyCard">
                {babysitterCards}
            </Row>
        )
    }
  

export default Babysitters