/**
 * Todolist Component
 * @module Todolist
 */

import React, { useState, useEffect } from "react";
import "./Todolist.css";
import Viewtask from "../view-task/Viewtask";
import EditTask from "../edit-task/Edittask";
import { useAuth } from "../auth-context/Authcontext";

/**
 * Todolist functional component responsible for rendering the list of tasks.
 * @returns {JSX.Element} Todolist component JSX
 */
function Todolist() {
  /**
   * State variable to hold the list of tasks.
   */
  const [tasks, setTasks] = useState([]);

  /**
   * Custom hook to access authentication context.
   */
  const { user } = useAuth();

  /**
   * Effect hook to load tasks from local storage on component mount.
   */
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  /**
   * Function to delete a task.
   * @param {number} index - The index of the task to delete
   */
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  /**
   * Function to update a task.
   * @param {number} index - The index of the task to update
   * @param {object} updatedTask - The updated task object
   */
  const updateTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="todo-list-section">
      {tasks.length === 0 ? (
        <p>You have no tasks. Add New.</p>
      ) : (
        <ul>
          <li>
            <span>
              <strong>Title</strong>
            </span>
            <span>
              <strong>Description</strong>
            </span>
            <span>
              <strong className="buttons">Actions</strong>
            </span>
          </li>
          {tasks.map((task, index) => (
            <li key={index}>
              <span>{task.title}</span>
              <span>{task.description}</span>
              <span>
                <small className="buttons">
                  <Viewtask task={task} />
                  {user && (
                    <>
                      <EditTask
                        task={task}
                        index={index}
                        onUpdate={updateTask}
                      />
                      <button
                        className="button-danger"
                        onClick={() => deleteTask(index)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </small>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todolist;
