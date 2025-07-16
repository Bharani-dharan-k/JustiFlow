<<<<<<< HEAD
import React from 'react'

const LawyerDashboard = () => {
  return (
    <div>LawyerDashboard</div>
  )
}

export default LawyerDashboard
=======
import React, { useEffect, useState } from 'react';
import './LawyerDashboard.css';

const LawyerDashboard = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    // Replace with actual fetch
    const dummyCases = [
      {
        _id: 'case001',
        title: 'Property Dispute',
        petitioner: 'John Doe',
        status: 'Pending',
        description: 'Dispute over ancestral land.',
      },
      {
        _id: 'case002',
        title: 'Contract Breach',
        petitioner: 'Jane Smith',
        status: 'In Progress',
        description: 'Violation of business contract.',
      },
    ];
    setCases(dummyCases);
  }, []);

  return (
    <div className="lawyer-dashboard">
      <h2>Welcome, Lawyer</h2>
      <p>You can view and respond to assigned cases here.</p>

      {cases.length === 0 ? (
        <p>No cases assigned yet.</p>
      ) : (
        <div className="case-list">
          {cases.map((c) => (
            <div key={c._id} className="case-card">
              <h3>{c.title}</h3>
              <p><strong>Petitioner:</strong> {c.petitioner}</p>
              <p><strong>Description:</strong> {c.description}</p>
              <p><strong>Status:</strong> {c.status}</p>
              <div className="actions">
                <button className="view-btn">View Details</button>
                <button className="upload-btn">Upload Response</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LawyerDashboard;
>>>>>>> main
