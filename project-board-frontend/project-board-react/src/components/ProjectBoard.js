import React, { Component } from "react";
import Task from "./Task";

class ProjectBoard extends Component {
  render() {
    return (
      <div className="container-fluid">
        <button className="col-md-1.5 btn btn-info">Create a new task</button>

        <div className="row">
          <div id="todo" className="col-sm">
            <div className="btn btn-warning" style={{ display: "block" }}>
              ToDo
            </div>
            <Task />
          </div>
          <div id="inprogress" className="col-sm">
            <div className="btn btn-danger" style={{ display: "block" }}>
              In Progress
            </div>
            <Task />
          </div>
          <div id="done" className="col-sm">
            <div className="btn btn-success" style={{ display: "block" }}>
              Completed
            </div>
            <Task />
            <Task />
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectBoard;
