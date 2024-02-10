// App.js
import React from "react";
import "./App.css";
import { AuthProvider } from "./components/auth-context/Authcontext";
import Applayout from "./components/app-layout/Applayout";
import AppHeader from "./components/app-header/Appheader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/login/Login";

const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <AppHeader />
          <Routes>
            <Route path="/" element={<Applayout />}></Route>
            <Route path="/login" element={<LoginForm />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};
export default App;
