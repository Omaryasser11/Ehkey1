import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">Content for card 1</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card 2</h5>
              <p className="card-text">Content for card 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
