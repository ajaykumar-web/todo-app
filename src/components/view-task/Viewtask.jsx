/**
 * Viewtask Component
 * @module Viewtask
 */

import React, { useState } from "react";
import "./Viewtask.css";

/**
 * Viewtask functional component responsible for rendering the details of a task.
 * @param {object} props - Component properties.
 * @param {object} props.task - The task to view.
 * @returns {JSX.Element} Viewtask component JSX
 */
function Viewtask({ task }) {
  /**
   * State variable to manage the view dialog.
   */
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Function to open the view dialog.
   */
  const openDialog = () => {
    setIsOpen(true);
  };

  /**
   * Function to close the view dialog.
   */
  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className="button-primary" onClick={openDialog}>
        View
      </button>
      {isOpen && (
        <div className="dialog">
          <div className="dialog-content">
            <h2>View Todo List</h2>
            <ul>
              <li>
                <span>
                  <strong>Title</strong>
                </span>
                <span>
                  <strong>Description</strong>
                </span>
                <span>
                  <strong>Created At</strong>
                </span>
                <span>
                  <strong>Status</strong>
                </span>
              </li>
              <li>
                <span>{task.title}</span>
                <span>{task.description}</span>
                <span>{task.createdAt}</span>
                <span>{task.status}</span>
              </li>
            </ul>
            <div className="buttons">
              <button className="button-danger" onClick={closeDialog}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Viewtask;
