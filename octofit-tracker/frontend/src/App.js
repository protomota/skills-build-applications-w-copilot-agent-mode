import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src="/octofitapp-small.png" alt="OctoFit Logo" />
              OctoFit Tracker
            </Link>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/activities">Activities</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/teams">Teams</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/workouts">Workouts</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={
            <div className="container mt-4">
              <div className="text-center mb-5">
                <h1 className="display-4 fw-bold text-primary">Welcome to OctoFit Tracker</h1>
                <p className="lead text-muted">Track your fitness journey with your team!</p>
              </div>
              
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="card h-100">
                    <div className="card-body">
                      <h3 className="card-title text-primary">
                        <i className="bi bi-star-fill me-2"></i>Features
                      </h3>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          User authentication and profiles
                        </li>
                        <li className="list-group-item">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Activity logging and tracking
                        </li>
                        <li className="list-group-item">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Team creation and management
                        </li>
                        <li className="list-group-item">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Competitive leaderboard
                        </li>
                        <li className="list-group-item">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Personalized workout suggestions
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-6">
                  <div className="card h-100 bg-primary text-white">
                    <div className="card-body">
                      <h3 className="card-title">
                        <i className="bi bi-rocket-takeoff-fill me-2"></i>Get Started
                      </h3>
                      <p className="card-text">
                        Use the navigation menu above to explore different sections of the app.
                      </p>
                      <div className="d-grid gap-2 mt-4">
                        <Link to="/users" className="btn btn-light btn-lg">
                          View Users
                        </Link>
                        <Link to="/activities" className="btn btn-outline-light btn-lg">
                          Track Activities
                        </Link>
                        <Link to="/leaderboard" className="btn btn-outline-light btn-lg">
                          See Leaderboard
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          } />
          <Route path="/users" element={<Users />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
