import React from "react";
import Sidebar from "../components/Sidebar";

function AuditPage() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ padding: "30px" }}>
        <h1>Audit Logs</h1>

        <p>
          ESG audit tracking system.
        </p>
      </div>
    </div>
  );
}

export default AuditPage;