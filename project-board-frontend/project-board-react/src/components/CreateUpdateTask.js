import React, { Component } from "react";

export default class CreateUpdateTask extends Component {
  close = function() {};

  render() {
    // The gray background
    const backdropStyle = {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(0,0,0,0.3)",
      padding: 50,
      display: "block"
    };

    return (
      <div
        className="modal fade show"
        id="createUpdateModal"
        tabindex="-1"
        role="dialog"
        style={{ display: "block" , backgroundColor: "rgba(0,0,0,0.6)"}}
        aria-labelledby="createUpdateModal"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content " role="document">
            <div className="modal-header bg-info text-white">
              <h6 className="modal-title">Create/Update Task</h6>
              <button
                type="button"
                className="close"
                aria-label="Close"
                data-dismiss="modal"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <select className="form-control">
                  <option value="todo">Todo</option>
                  <option value="inprogress">In Progress</option>
                  <option value="done">Done</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Acceptance Criteria"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Summary"
                />
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn-primary btn btn-default">
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
