import React from "react";

function Navbar({
  darkMode,
  setDarkMode,
  search,
  setSearch,
}) {
  return (
    <div
      style={{
        background: darkMode
          ? "#1f2937"
          : "white",

        padding: "20px",

        borderRadius: "16px",

        marginBottom: "30px",

        display: "flex",

        justifyContent:
          "space-between",

        alignItems: "center",

        boxShadow:
          "0 4px 10px rgba(0,0,0,0.08)",

        flexWrap: "wrap",

        gap: "15px",
      }}
    >

      {/* Left Section */}

      <div>

        <h2
          style={{
            margin: 0,

            fontSize: "34px",

            fontWeight: "bold",

            background:
              "linear-gradient(to right, #2563eb, #10b981)",

            WebkitBackgroundClip:
              "text",

            WebkitTextFillColor:
              "transparent",
          }}
        >
          🌍 ESG Intelligence Platform
        </h2>

        <p
          style={{
            marginTop: "8px",

            color: darkMode
              ? "#d1d5db"
              : "#6b7280",

            fontSize: "15px",
          }}
        >
          AI Powered Sustainability Analytics
        </p>

      </div>

      {/* Right Section */}

      <div
        style={{
          display: "flex",

          gap: "15px",

          alignItems: "center",

          flexWrap: "wrap",
        }}
      >

        {/* AI Status */}

        <div
          style={{
            background: darkMode
              ? "#111827"
              : "#f3f4f6",

            color: "#10b981",

            padding: "10px 14px",

            borderRadius: "12px",

            fontWeight: "bold",

            border:
              "1px solid #10b981",

            fontSize: "14px",
          }}
        >
          ● AI Active
        </div>

        {/* Dark Mode Button */}

        <button
          onClick={() =>
            setDarkMode(!darkMode)
          }
          style={{
            padding: "10px 15px",

            borderRadius: "10px",

            border: "none",

            cursor: "pointer",

            background: darkMode
              ? "#374151"
              : "#2563eb",

            color: "white",

            fontWeight: "bold",

            transition: "0.3s",
          }}
        >
          {darkMode
            ? "☀ Light"
            : "🌙 Dark"}
        </button>

        {/* Search */}

        <input
          type="text"

          value={search}

          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }

          placeholder="Search companies..."

          style={{
            padding: "12px",

            borderRadius: "10px",

            border: darkMode
              ? "1px solid #374151"
              : "1px solid #ddd",

            width: "240px",

            background: darkMode
              ? "#111827"
              : "white",

            color: darkMode
              ? "white"
              : "black",

            outline: "none",

            fontSize: "14px",
          }}
        />

        {/* Notification Bell */}

        <div
          style={{
            background: darkMode
              ? "#111827"
              : "#f3f4f6",

            padding: "10px",

            borderRadius: "50%",

            cursor: "pointer",

            fontSize: "18px",
          }}
        >
          🔔
        </div>

        {/* Profile */}

        <img
          src="https://i.pravatar.cc/40"

          alt="profile"

          style={{
            borderRadius: "50%",

            border:
              "2px solid #10b981",

            cursor: "pointer",
          }}
        />

      </div>

    </div>
  );
}

export default Navbar;