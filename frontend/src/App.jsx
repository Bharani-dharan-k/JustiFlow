import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import LawyerDashboard from './pages/LawyerDashboard';
import JudgeDashboard from './pages/JudgeDashboard';
import PetitionerDashboard from './pages/PetitionerDashboard';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Dashboards by Role */}
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute role="Admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/lawyer-dashboard"
            element={
              <ProtectedRoute role="Lawyer">
                <LawyerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/judge-dashboard"
            element={
              <ProtectedRoute role="Judge">
                <JudgeDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/petitioner-dashboard"
            element={
              <ProtectedRoute role="Petitioner">
                <PetitionerDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
