import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'client' // 'client' or 'employee'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const success = await login(formData.email, formData.password, formData.userType);
      if (success) {
        navigate(`/${formData.userType}/dashboard`);
      } else {
        setError('Failed to log in');
      }
    } catch (err) {
      setError('An error occurred during login');
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <Row className="w-100" style={{ maxWidth: '400px' }}>
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <h2 className="text-center mb-4">ABBK Physiques Login</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Password"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Login As</Form.Label>
                  <Form.Select
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                  >
                    <option value="client">Client</option>
                    <option value="employee">Employee</option>
                  </Form.Select>
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100"
                  disabled={loading}
                >
                  {loading ? 'Logging in...' : 'Login'}
                </Button>
              </Form>
              <div className="text-center mt-3">
                <Link to="/forgot-password">Forgot password?</Link>
              </div>
            </Card.Body>
          </Card>
          <div className="text-center mt-3">
            Need an account? <Link to="/register">Sign up</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;