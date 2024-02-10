/**
 * LoginForm Component
 * @module LoginForm
 */

import React, { useState } from "react";
import "./Login.css";
import { useAuth } from "../auth-context/Authcontext";
import { useNavigate } from "react-router-dom";

/**
 * LoginForm functional component responsible for rendering the login form.
 * @returns {JSX.Element} LoginForm component JSX
 */
const LoginForm = () => {
  /**
   * Custom hook to access authentication context.
   */
  const { onLogin } = useAuth();

  /**
   * State variables to hold the username and password entered in the login form.
   */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Custom hook for navigation.
   */
  const navigate = useNavigate();

  /**
   * Function to navigate back to the home page.
   */
  const navigateTo = () => {
    navigate("/");
  };

  /**
   * Function to handle form submission.
   * It checks if the username and password are correct and logs in the user.
   * If the credentials are incorrect, it displays an alert.
   * @param {Event} e - The form submission event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "Wpadmin123#") {
      onLogin(username);
      navigateTo();
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="loginform">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <p>Username</p>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p>Password</p>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="buttons">
          <h3 onClick={navigateTo}>Back to home</h3>
          <button className="button-success" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
