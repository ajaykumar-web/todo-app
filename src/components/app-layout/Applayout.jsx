/**
 * Applayout Component
 * @module Applayout
 */

import React from "react";
import Todolist from "../todo-list/Todolist";

/**
 * Applayout functional component responsible for rendering the layout of the application.
 * @function Applayout
 * @returns {JSX.Element} Applayout component JSX
 */
const Applayout = () => {
  return (
    <>
      <Todolist />
    </>
  );
};

export default Applayout;
