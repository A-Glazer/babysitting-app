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
        
    // return (
    //     <Container fluid>
    //         <Row>
    //             {babysitterCards}
    //         </Row>
    //     </Container>
    // )

//     return (

//     <Card style={{ width: '18rem' }}>
//     <Card.Body>
//         <Card.Title>{baby.first_name}, {baby.last_name}</Card.Title>
//         <Card.Text>
//         {baby.phone_number}
//         </Card.Text>
//         <Button variant="primary">View Availability</Button>
//     </Card.Body>
//     </Card>

        
// )
//     )

    // <div>
    //     {babysitters.map(baby => 
    //         <li key={baby.id}>
    //             <Link to={`/babysitters/${baby.id}`}>{baby.last_name}, {baby.first_name}</Link>    
    //         </li>
    //      )}
    // </div>
    




export default Babysitters