import React, { useState } from "react";

import Sidebar from "../components/Sidebar";

function UploadPage() {
  const [file, setFile] = useState(null);

  async function handleUpload() {
    const formData = new FormData();

    formData.append("file", file);

    await fetch(
      "http://127.0.0.1:8000/api/upload-csv/",
      {
        method: "POST",
        body: formData,
      }
    );

    alert("CSV uploaded successfully");
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ padding: "30px" }}>
        <h1>Upload ESG CSV</h1>

        <input
          type="file"
          onChange={(e) =>
            setFile(e.target.files[0])
          }
        />

        <br />
        <br />

        <button onClick={handleUpload}>
          Upload CSV
        </button>
      </div>
    </div>
  );
}

export default UploadPage;