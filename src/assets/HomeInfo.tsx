// HomeInfo.tsx
import "./ElementAssets.css";
import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";

const HomeInfo: React.FC = () => {
  const [videoUrls, setVideoUrls] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  /* const [connectionType, setConnectionType] = useState<string>(""); // To store the connection type
  const [videoType, setVideoType] = useState<string>(""); // To store the type of video
  const [bitrateKbps, setBitrateKbps] = useState<number>(0); // To store the video bitrate in kbps */

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddVideo = () => {
    setVideoUrls((prevUrls) => [...prevUrls, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <br></br>
      <center>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter video URL"
            className="InputURL"
          />
          <br></br>
          <br></br>
          <button className="button" onClick={handleAddVideo}>
            Add Video
          </button>
          <br></br>
        </div>
        <VideoPlayer videoUrls={videoUrls} />
        {/* <VideoData onReady={handleLoad} /> */}
      </center>
    </div>
  );
};

export default HomeInfo;
