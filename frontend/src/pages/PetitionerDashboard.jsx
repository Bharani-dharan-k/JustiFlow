import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PetitionerDashboard.css';

const PetitionerDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  // Sample: Open Jitsi room with user ID
  const handleJoinHearing = () => {
    const domain = 'meet.jit.si';
    const roomName = `JustiFlow_Hearing_${user.id}`;
    const options = {
      roomName: roomName,
      width: 900,
      height: 500,
      parentNode: document.getElementById('jitsi-container'),
      userInfo: {
        displayName: user.name
      }
    };

    // Load Jitsi
    const script = document.createElement('script');
    script.src = 'https://meet.jit.si/external_api.js';
    script.onload = () => {
      new window.JitsiMeetExternalAPI(domain, options);
    };
    document.body.appendChild(script);
  };

  return (
    <div className="petitioner-dashboard">
      <h2>Welcome, Petitioner</h2>

      <div className="dashboard-grid">
        {/* File Case */}
        <div className="dashboard-card">
          <h3>File New Case</h3>
          <p>Submit a new petition to start your case.</p>
          <button onClick={() => navigate('/file-case')}>File Case</button>
        </div>

        {/* My Cases */}
        <div className="dashboard-card">
          <h3>My Cases</h3>
          <p>Track all the cases you have filed.</p>
          <button onClick={() => navigate('/my-cases')}>View Cases</button>
        </div>

        {/* Live Hearing */}
        <div className="dashboard-card">
          <h3>Join Live Hearing</h3>
          <p>Join the e-Hearing with the Judge & Lawyer.</p>
          <button onClick={handleJoinHearing}>Join Hearing</button>
        </div>

        {/* Contact Lawyer */}
        <div className="dashboard-card">
          <h3>Contact Lawyer</h3>
          <p>Reach your assigned lawyer for consultation.</p>
          <button onClick={() => window.location.href = 'mailto:lawyer@example.com'}>
            Email Lawyer
          </button>
        </div>

        {/* Contact Judge */}
        <div className="dashboard-card">
          <h3>Contact Judge</h3>
          <p>Send official queries to the judge's chamber.</p>
          <button onClick={() => window.location.href = 'mailto:judge@example.com'}>
            Email Judge
          </button>
        </div>
      </div>

      {/* Jitsi container */}
      <div id="jitsi-container" style={{ marginTop: '2rem' }}></div>
    </div>
  );
};

export default PetitionerDashboard;
