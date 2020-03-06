import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {

    return (
        <div>
            <Navbar bg="light" variant="light">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav className="mr-auto">
                    <Nav.Link href="/babysitters">Babysitter List</Nav.Link>
                    <Nav.Link href="/babysitters/new">New Babysitter</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )

}

export { NavBar }
