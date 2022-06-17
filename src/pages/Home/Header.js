import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <>

            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Stringar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#games">Games</Nav.Link>
                        <Nav.Link href="#explore">Explore</Nav.Link>
                        <Nav.Link href="#userguide">User Guide</Nav.Link>
                        <Nav.Link href="#contactus">Contact Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;