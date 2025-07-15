import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PetitionerDashboard.css';

const PetitionerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="petitioner-dashboard">
      <h2>Welcome, Petitioner</h2>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>File New Case</h3>
          <p>Submit a new petition to start your case.</p>
          <button onClick={() => navigate('/file-case')}>File Case</button>
        </div>

        <div className="dashboard-card">
          <h3>My Cases</h3>
          <p>Track all the cases you’ve filed.</p>
          <button onClick={() => navigate('/my-cases')}>View Cases</button>
        </div>
      </div>
    </div>
  );
};

export default PetitionerDashboard;
