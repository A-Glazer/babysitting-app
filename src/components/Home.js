import React from 'react'
// import Babysitters from './Babysitters'
import Flip from 'react-reveal/Flip';
import Carousel from 'react-bootstrap/Carousel'
import babysitterWithKid from '../images/babysitterWithKid.jpg'
import kidsInWheelbarrow from '../images/kidsInWheelbarrow.jpg'
import readingABook from '../images/readingABook.jpg'
import Sisters from '../images/Sisters.jpg'
import "../styles.css"
import Button from 'react-bootstrap/Button'
import { Link, Route, Switch } from 'react-router-dom'


export default class Home extends React.Component {

    render() {


        return (
            // Carousel
            <div>
                <div className="imgContainer">
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
                                className="d-block w-100 height-adjust"
                                src={kidsInWheelbarrow}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 height-adjust"
                                src={readingABook}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 height-adjust"
                                src={Sisters}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <div className="title-position">
                        <div className="title-background-box">
                            <Flip left className="flipTitle">
                                <h1>Welcome to the Babysitter App! </h1>
                            </Flip>
                        </div>
                    </div>
                </div>


                <br />  <br />
                <h2>Would you like to: </h2>
                <Link to={'/babysitters/'}><Button variant="outline-info" className="button-padding">View Babysitters</Button></Link>
                <Link to={'/babysitters/new'}><Button variant="outline-info" className="button-padding">Create a New Babysitter</Button></Link>
            </div>
        )
    }
} 