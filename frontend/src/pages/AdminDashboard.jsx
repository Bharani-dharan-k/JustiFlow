import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2 className="dashboard-title">Welcome, Admin</h2>

      <div className="dashboard-sections">
        <div className="dashboard-card">
          <h3>Pending Lawyer Approvals</h3>
          <p>View and approve registered lawyers.</p>
          <Link to="/admin/lawyers">
            <button>Manage Lawyers</button>
          </Link>
        </div>

        <div className="dashboard-card">
          <h3>Pending Judge Approvals</h3>
          <p>View and approve registered judges.</p>
          <Link to="/admin/judges">
            <button>Manage Judges</button>
          </Link>
        </div>

        <div className="dashboard-card">
          <h3>All Registered Users</h3>
          <p>View list of all registered users.</p>
          <Link to="/admin/users">
            <button>View Users</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
