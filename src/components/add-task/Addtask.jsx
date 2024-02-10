/**
 * Addtask Component
 * @module Addtask
 */

import React, { useState } from "react";

/**
 * Addtask functional component responsible for adding new tasks.
 * @function Addtask
 * @returns {JSX.Element} Addtask component JSX
 */
function Addtask() {
  /**
   * State variable to track the visibility of the add task dialog.
   * @type {boolean}
   * @default false
   */
  const [isOpen, setIsOpen] = useState(false);

  /**
   * State variable to hold the title of the task being added.
   * @type {string}
   * @default ""
   */
  const [title, setTitle] = useState("");

  /**
   * State variable to hold the description of the task being added.
   * @type {string}
   * @default ""
   */
  const [description, setDescription] = useState("");

  /**
   * State variable to hold the status of the task being added.
   * @type {string}
   * @default ""
   */
  const [status, setStatus] = useState("");

  /**
   * State variable to hold error messages during form submission.
   * @type {string}
   * @default ""
   */
  const [error, setError] = useState("");

  /**
   * Function to open the add task dialog.
   * @function openDialog
   */
  const openDialog = () => {
    setIsOpen(true);
  };

  /**
   * Function to close the add task dialog.
   * Resets form fields and sets isOpen state to false.
   * @function closeDialog
   */
  const closeDialog = () => {
    setTitle("");
    setDescription("");
    setStatus("");
    setIsOpen(false);
  };

  /**
   * Function to handle form submission.
   * Prevents default form submission behavior.
   * Validates form fields, creates a new task object,
   * stores it in local storage, resets form fields,
   * clears errors, and closes the dialog.
   * @function handleSubmit
   * @param {Event} event - Form submission event
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) {
      setError("Please fill out all fields");
      return;
    }
    const task = {
      title: title,
      description: description,
      status: status,
      createdAt: new Date().toDateString(),
    };
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setTitle("");
    setDescription("");
    setStatus("");
    setError("");
    setIsOpen(false);
  };

  return (
    <div>
      <button className="button-success" onClick={openDialog}>
        Add
      </button>
      {isOpen && (
        <div className="dialog">
          <div className="dialog-content">
            <h2>Add Todo Task</h2>
            <div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <br />
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <label htmlFor="description">Description:</label>
                <br />
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <br />
                <label htmlFor="status">Status:</label>
                <br />
                <input
                  type="text"
                  id="status"
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                />
                <br />
                {error && <div style={{ color: "red" }}>{error}</div>}
                <div className="buttons">
                  <button className="button-success" type="submit">
                    Create
                  </button>
                  <button
                    className="button-danger"
                    type="button"
                    onClick={closeDialog}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Addtask;
