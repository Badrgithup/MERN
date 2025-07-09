import React from 'react';
import { Container, Row, Col, Button, Card, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import gymImage from '../assets/gym-hero.jpg';

function Landing() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <span className="fw-bold">ABBK</span> Physiques
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/login" className="me-3">Login</Nav.Link>
              <Button as={Link} to="/register" variant="outline-light">Join Now</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4 fw-bold mb-4">
                Transform Your Body at <span className="text-primary">ABBK Physiques</span>
              </h1>
              <p className="lead mb-4">
                Professional training programs tailored to your fitness goals.
              </p>
              <div className="d-flex gap-3">
                <Button as={Link} to="/register" variant="primary" size="lg">
                  Get Started
                </Button>
              </div>
            </Col>
            <Col md={6}>
              <img 
                src={gymImage} 
                alt="Fitness Training" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="py-4 bg-dark text-white">
        <Container>
          <Row>
            <Col md={6}>
              <p className="mb-0">© 2023 ABBK Physiques</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Landing;