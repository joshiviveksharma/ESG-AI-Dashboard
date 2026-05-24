import React from "react";
import Sidebar from "../components/Sidebar";

function LoginPage() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ padding: "30px" }}>
        <h1>Login</h1>

        <input
          type="email"
          placeholder="Email"
          style={{
            display: "block",
            marginBottom: "10px",
            padding: "10px",
            width: "300px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            display: "block",
            marginBottom: "10px",
            padding: "10px",
            width: "300px",
          }}
        />

        <button
          style={{
            padding: "10px 20px",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;