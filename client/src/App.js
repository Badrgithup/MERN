import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ClientDashboard from './pages/client/Dashboard';
import EmployeeDashboard from './pages/employee/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router> {/* Only one Router in the entire app */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/client/dashboard" element={
          <PrivateRoute role="client">
            <ClientDashboard />
          </PrivateRoute>
        } />
        
        <Route path="/employee/dashboard" element={
          <PrivateRoute role="employee">
            <EmployeeDashboard />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;