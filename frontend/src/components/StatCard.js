import React from "react";

function StatCard({
  title,
  value,
  color,
}) {
  return (
    <div
      style={{
        flex: 1,
        background: color,
        padding: "20px",
        borderRadius: "12px",
        color: "white",
        minWidth: "200px",
      }}
    >
      <h3>{title}</h3>

      <h1>{value}</h1>
    </div>
  );
}

export default StatCard;