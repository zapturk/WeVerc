import React from 'react';
import {Navbar, 
        Nav,
        Form,
        FormControl,
        Button} from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">WeVerc</Navbar.Brand>
                <Nav className="mr-auto">
                    {/* <Nav.Link href="/">Home</Nav.Link> */}
                    <Nav.Link href="/program">Program</Nav.Link>
                    <Nav.Link href="/upload">Upload</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    );
};

export default Header;