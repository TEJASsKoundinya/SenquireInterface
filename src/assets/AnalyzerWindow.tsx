// AnalyzerWindow.tsx
import React, { useState } from "react";
import axios from "axios";
import "./ElementAssets.css"

const AnalyzerWindow: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [results, setResults] = useState<string[]>([]);

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedVideo(file);
      const videoUrl = URL.createObjectURL(file);
      setVideoUrl(videoUrl);
    }
  };



  const analyzeVideo = async () => {
    if (!selectedVideo) return;

    const formData = new FormData();
    formData.append("file", selectedVideo);
    console.log(selectedVideo);

   try {
    console.log("verification..");
    const response = await axios.post("http://localhost:4000/", formData, {
      params: {
        filename: selectedVideo.name,
        latest: selectedVideo.lastModified,
        size: selectedVideo.size,
        type: selectedVideo.type,
      },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data);
    const Data = response.data;
    setResults(Data);
     } catch (error) {
      console.error(error);
    } 


  };


  return (
    <div className="container">
        <input type="file" accept="video/*" onChange={handleVideoChange} />
        <br></br>
        <button onClick={analyzeVideo} className="button">
          Analyze Video
        </button>
        <br></br>

      <div className="container">
        {results ? <p>{results}</p> : <p>Loading...</p>}

        {videoUrl && (
          <video controls width="300px">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default AnalyzerWindow;
