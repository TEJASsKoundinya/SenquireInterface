import React, { useRef } from "react";
import "./ElementAssets.css";


const VideoUploadComponent: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const videoURL = URL.createObjectURL(file);

      if (videoRef.current) {
        videoRef.current.src = videoURL;
        videoRef.current.play();

        console.log("Video duration:", videoRef.current.duration);
        console.log("Video width:", videoRef.current.videoWidth);
        console.log("Video height:", videoRef.current.videoHeight);
      }
    }
  };

  return (
    <div className="container">
      <input type="file" accept="video/*" onChange={handleVideoUpload} />
      <video ref={videoRef} controls />
    </div>
  );
};

export default VideoUploadComponent;
