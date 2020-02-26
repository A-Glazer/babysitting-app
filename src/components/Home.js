import React from 'react'
import Babysitters from './Babysitters'
import Roll from 'react-reveal/Roll';
import Carousel from 'react-bootstrap/Carousel'
import babysitterWithKid from '../images/babysitterWithKid.jpg'
import kidsInWheelbarrow from '../images/kidsInWheelbarrow.jpg'
import readingABook from '../images/readingABook.jpg'
import Sisters from '../images/Sisters.jpg'
import "../styles.css"
import Jump from 'react-reveal/Jump';
import Button from 'react-bootstrap/Button'


export default class Home extends React.Component {

    render(){
       

        return(
            // Carousel
            <div>
            <Carousel >
                <Carousel.Item>
                    <img
                    className="d-block w-100 height-adjust"
                    src={babysitterWithKid}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={kidsInWheelbarrow}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={readingABook}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Sisters}
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
                <Roll left>
                <h1>Welcome to the Babysitter App! </h1>
                </Roll>
            
           <br/>  <br/>
            <h2>Would you like to </h2>
            <Button variant="outline-info">View Babysitters</Button>
            <Button variant="outline-info">Create a New Babysitter</Button>
        </div>
        )
}
} 