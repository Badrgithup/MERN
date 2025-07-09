import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ClientNavbar from '../../components/ClientNavbar';

function ClientDashboard() {
  return (
    <>
      <ClientNavbar />
      <Container className="mt-4">
        <h2>Client Dashboard</h2>
        <Row className="mt-3">
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>My Workouts</Card.Title>
                <Card.Text>
                  View and track your workout plans
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Progress</Card.Title>
                <Card.Text>
                  Track your fitness journey
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ClientDashboard;