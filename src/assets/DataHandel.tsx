import React, { useState, useEffect } from "react";

const DataHandler: React.FC = () => {
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<string>("");

  useEffect(() => {
    // Fetch file names from the Flask API
    fetch("http://127.0.0.1:5000/api/files")
      .then((response) => response.json())
      .then((data) => setFileNames(data))
      .catch((error) => console.error("Error fetching file names:", error));
  }, []);

    const handleFileSubmit = () => {
      if (!selectedFile) {
        alert("Please select a file first.");
        return;
      }
      fetch("http://127.0.0.1:5000/api/process", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedFile }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the Flask API after the operation is performed
          console.log(data);
        })
        .catch((error) => console.error("Error processing file:", error));
    };

  return (
    <div className="container">
      <select
        value={selectedFile}
        onChange={(e) => setSelectedFile(e.target.value)}
      >
        <option value="">Select a file</option>
        {fileNames.map((fileName) => (
          <option key={fileName} value={fileName}>
            {fileName}
          </option>
        ))}
      </select>
      {selectedFile && (
        <div>
          <h5>Selected File: {selectedFile}</h5>
        </div>
      )}
      <button onClick={handleFileSubmit}>Submit</button>
      {selectedFile && (
        <div>
          <h3>Selected File: {selectedFile}</h3>
          {/* Additional logic to process the selected file */}
        </div>
      )}
    </div>
  );
};

export default DataHandler;
