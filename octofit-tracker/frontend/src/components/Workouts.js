import React, { useState, useEffect } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;
    console.log('Fetching workouts from:', apiUrl);

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Workouts data received:', data);
        // Handle both paginated (.results) and plain array responses
        const workoutsData = data.results || data;
        setWorkouts(Array.isArray(workoutsData) ? workoutsData : []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching workouts:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="container mt-4 text-center">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="mt-3 text-muted">Loading workout suggestions...</p>
    </div>
  );
  
  if (error) return (
    <div className="container mt-4">
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Error!</h4>
        <p>{error}</p>
      </div>
    </div>
  );

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">
          <i className="bi bi-lightning-fill text-warning me-2"></i>Workout Suggestions
        </h2>
        <button className="btn btn-primary">
          <i className="bi bi-plus-circle me-2"></i>Create Workout
        </button>
      </div>
      
      <div className="row g-4">
        {workouts.length > 0 ? (
          workouts.map(workout => (
            <div key={workout.id} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-header bg-primary text-white">
                  <h5 className="card-title mb-0">
                    <i className="bi bi-activity me-2"></i>
                    {workout.name}
                  </h5>
                </div>
                <div className="card-body">
                  <p className="card-text text-muted">{workout.description}</p>
                  
                  <ul className="list-group list-group-flush mt-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <span><i className="bi bi-clock me-2 text-primary"></i>Duration</span>
                      <span className="badge bg-primary rounded-pill">{workout.duration} min</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <span><i className="bi bi-speedometer2 me-2 text-warning"></i>Difficulty</span>
                      <span className="badge bg-warning text-dark rounded-pill">{workout.difficulty_level}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <span><i className="bi bi-fire me-2 text-danger"></i>Target Calories</span>
                      <span className="badge bg-danger rounded-pill">{workout.target_calories}</span>
                    </li>
                    {workout.equipment_needed && (
                      <li className="list-group-item">
                        <span><i className="bi bi-tools me-2 text-info"></i>Equipment</span>
                        <p className="mb-0 mt-2 text-muted small">{workout.equipment_needed}</p>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="card-footer bg-transparent">
                  <div className="d-grid">
                    <button className="btn btn-outline-primary">
                      <i className="bi bi-play-circle me-2"></i>Start Workout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="card">
              <div className="card-body text-center text-muted py-5">
                <i className="bi bi-inbox fs-1 d-block mb-3"></i>
                <p className="mb-0">No workout suggestions found</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Workouts;
