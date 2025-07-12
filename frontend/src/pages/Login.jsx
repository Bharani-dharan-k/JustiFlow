import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [role, setRole] = useState('Petitioner');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ role, email, password });
    // You can replace this with your API call
    alert(`Logging in as ${role}`);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="text-center">Login to JustiFlow</h2>
        <form onSubmit={handleLogin}>
          {/* Role Selection */}
          <div className="form-group">
            <label>Select Role</label>
            <select
              className="form-control"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="Admin">Admin</option>
              <option value="Lawyer">Lawyer</option>
              <option value="Judge">Judge</option>
              <option value="Petitioner">Petitioner</option>
            </select>
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100 mt-3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
