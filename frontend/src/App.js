import React, { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import UploadPage from "./pages/UploadPage";
import AuditPage from "./pages/AuditPage";
import LoginPage from "./pages/LoginPage";

function App() {

  const [darkMode, setDarkMode] =
    useState(false);

  return (

    <div
      style={{
        background: darkMode
          ? "#111827"
          : "#f3f4f6",

        minHeight: "100vh",

        color: darkMode
          ? "white"
          : "black",
      }}
    >

      <BrowserRouter>

        <Routes>

          <Route
            path="/"
            element={
              <Dashboard
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />

          <Route
            path="/upload"
            element={
              <UploadPage
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />

          <Route
            path="/audit"
            element={
              <AuditPage
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />

          <Route
            path="/login"
            element={
              <LoginPage
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;