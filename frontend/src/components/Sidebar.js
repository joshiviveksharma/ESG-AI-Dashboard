import React from "react";

import { Link } from "react-router-dom";

function Sidebar() {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    display: "block",
    marginBottom: "20px",
    fontSize: "18px",
  };

  return (
    <div
      style={{
        width: "250px",
        background: "#111827",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>
        ESG Platform
      </h2>

      <Link to="/" style={linkStyle}>
        Dashboard
      </Link>

      <Link
        to="/upload"
        style={linkStyle}
      >
        Upload Data
      </Link>

      <Link
        to="/audit"
        style={linkStyle}
      >
        Audit Logs
      </Link>

      <Link
        to="/login"
        style={linkStyle}
      >
        Login
      </Link>
    </div>
  );
}

export default Sidebar;