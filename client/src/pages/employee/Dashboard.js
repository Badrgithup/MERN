import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import EmployeeNavbar from '../../components/EmployeeNavbar';

function EmployeeDashboard() {
  const clients = [
    { id: 1, name: 'John Doe', lastVisit: '2023-05-15' },
    { id: 2, name: 'Jane Smith', lastVisit: '2023-05-10' }
  ];

  return (
    <>
      <EmployeeNavbar />
      <Container className="mt-4">
        <h2>Employee Dashboard</h2>
        <Row className="mt-3">
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Client Management</Card.Title>
                <Table striped hover>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Last Visit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clients.map(client => (
                      <tr key={client.id}>
                        <td>{client.name}</td>
                        <td>{client.lastVisit}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EmployeeDashboard;