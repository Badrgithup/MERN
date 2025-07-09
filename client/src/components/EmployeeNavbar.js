import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function EmployeeNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/employee/dashboard">ABBK Physiques</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/employee/dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/employee/clients">Clients</Nav.Link>
            <Nav.Link as={Link} to="/employee/schedule">Schedule</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-light" as={Link} to="/logout">Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default EmployeeNavbar;