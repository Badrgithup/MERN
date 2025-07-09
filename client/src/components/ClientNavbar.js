import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ClientNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/client/dashboard">ABBK Physiques</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/client/dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/client/workouts">Workouts</Nav.Link>
            <Nav.Link as={Link} to="/client/progress">Progress</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-light" as={Link} to="/logout">Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ClientNavbar;