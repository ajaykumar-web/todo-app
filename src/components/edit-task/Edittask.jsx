/**
 * EditTask Component
 * @module EditTask
 */

import React, { useState } from "react";

/**
 * EditTask functional component responsible for editing a task.
 * @param {object} props - Component properties.
 * @param {object} props.task - The task to be edited.
 * @param {number} props.index - The index of the task in the list.
 * @param {function} props.onUpdate - Function to update the task.
 * @returns {JSX.Element} EditTask component JSX
 */
function EditTask({ task, index, onUpdate }) {
  // State variables to manage the edit dialog and task details
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const [error, setError] = useState("");

  /**
   * Function to open the edit dialog.
   */
  const openDialog = () => {
    setIsOpen(true);
  };

  /**
   * Function to close the edit dialog.
   * Resets form fields and closes the dialog.
   */
  const closeDialog = () => {
    setTitle("");
    setDescription("");
    setStatus();
    setIsOpen(false);
  };

  /**
   * Function to handle form submission.
   * Updates the task with the new details and closes the dialog.
   * @param {Event} event - The form submission event
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) {
      setError("Please fill out all fields");
      return;
    }
    const updatedTask = {
      ...task,
      title: title,
      description: description,
      status: status,
    };
    onUpdate(index, updatedTask);
    closeDialog();
  };

  return (
    <div>
      <button className="button-success" onClick={openDialog}>
        Edit
      </button>
      {isOpen && (
        <div className="dialog">
          <div className="dialog-content">
            <h2>Edit Todo Task</h2>
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
                    Update
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

export default EditTask;
