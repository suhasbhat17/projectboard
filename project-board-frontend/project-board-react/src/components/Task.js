import React, { Component } from "react";

export default class Task extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header"><h6 className="card-title">Status</h6></div>
        <div className="card-body">
          <div>Acceptance Criteria</div>
          <div>Summary</div>
          <div className="btn btn-light">Update</div>
        </div>
      </div>
    );
  }
}
