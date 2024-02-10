/**
 * AuthContext Module
 * @module AuthContext
 */

import React, { createContext, useContext, useEffect, useState } from "react";

/**
 * AuthContext is a context object to manage user authentication state.
 * @type {React.Context}
 */
const AuthContext = createContext();

/**
 * Custom hook to access the AuthContext.
 * @returns {object} The authentication context
 */
export const useAuth = () => useContext(AuthContext);

/**
 * AuthProvider component provides authentication context to its children.
 * @param {React.ReactNode} children - The children components
 * @returns {JSX.Element} AuthProvider component JSX
 */
export const AuthProvider = ({ children }) => {
  /**
   * State variable to hold the current user.
   * @type {string|null}
   */
  const [user, setUser] = useState(null);

  /**
   * Load user from localStorage on component mount.
   */
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  /**
   * Function to handle user login.
   * @param {string} username - The username of the logged-in user
   */
  const handleLogin = (username) => {
    setUser(username);
    // Store user in localStorage
    localStorage.setItem("user", username);
  };

  /**
   * Function to handle user logout.
   */
  const handleLogout = () => {
    setUser(null);
    // Remove user from localStorage
    localStorage.removeItem("user");
  };

  /**
   * Provide authentication context value to its children.
   */
  return (
    <AuthContext.Provider
      value={{ user, onLogin: handleLogin, onLogout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
