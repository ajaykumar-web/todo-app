/**
 * AppHeader Component
 * @module AppHeader
 */

import React from "react";
import "./Appheader.css";
import Addtask from "../add-task/Addtask";
import appLogo from "../../assests/images/logo/todoist-logo.svg";
import { useAuth } from "../auth-context/Authcontext";
import { useNavigate } from "react-router-dom";

/**
 * AppHeader functional component responsible for rendering the application header.
 * @function AppHeader
 * @returns {JSX.Element} AppHeader component JSX
 */
function AppHeader() {
  /**
   * Custom hook to access authentication context.
   * @type {object}
   * @property {object} user - Current user information.
   * @property {function} onLogout - Function to handle user logout.
   */
  const { user, onLogout } = useAuth();

  /**
   * Custom hook for navigation.
   * @type {function}
   */
  const navigate = useNavigate();

  /**
   * Current URL of the application.
   * @type {string}
   */
  const currentURL = window.location.href;

  /**
   * Checks if the current page is the login page.
   * @type {boolean}
   */
  const isLoginPage = currentURL.includes("/login");

  /**
   * Function to navigate to the login page.
   * @function navigateTo
   */
  const navigateTo = () => {
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={appLogo} alt="Logo" className="logo-img" />
      </div>
      <div className="buttons">
        <Addtask />
        {user ? (
          <button className="button-danger" onClick={onLogout}>
            Logout
          </button>
        ) : !isLoginPage ? (
          <button className="button-danger" onClick={navigateTo}>
            Login
          </button>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}

export default AppHeader;
