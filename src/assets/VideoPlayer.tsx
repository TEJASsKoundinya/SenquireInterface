// VideoPlayer.tsx

import React, { useState } from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  videoUrls: string[];
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrls }) => {
  const [playing, setPlaying] = useState(true);

  return (
    <div>
      {videoUrls.map((url, index) => (
        <ReactPlayer
          key={index}
          url={url}
          controls
          playing={playing}
          loop
          width="300px"
          height="auto"
        />
      ))}
    </div>
  );
};

export default VideoPlayer;
