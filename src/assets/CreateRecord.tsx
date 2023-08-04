import React, { useState } from "react";
import Webcam from "react-webcam";
import "./ElementAssets.css";

function getIpAddress() {
      fetch("https://api.ipify.org?format=json")
        .then((response) => response.json())
        .then((data) => {
          const ipAddress = data.ip;
          console.log(`Your IP Address is: ${ipAddress}`);
        })
        .catch((error) => {
          console.error("Error fetching IP address:", error);
        });
    }

    async function getCameraType() {
      try {
        const mediaDevices = await navigator.mediaDevices.enumerateDevices();
        const cameras = mediaDevices.filter(
          (device) => device.kind === "videoinput"
        );

        if (cameras.length > 0) {
          // Assuming the first camera is the user's default camera
          const defaultCamera = cameras[0];
          console.log("Default camera label:", defaultCamera.label);

          // You can also access other properties like device ID, etc.
          console.log("Default camera ID:", defaultCamera.deviceId);
          console.log("Default camera group ID:", defaultCamera.groupId);
        } else {
          console.log("No cameras found.");
        }
      } catch (error) {
        console.error("Error accessing media devices:", error);
      }
    }    

const MyComponent: React.FC = () => {
  const [divCount, setDivCount] = useState(1);

  const handleAddDiv = () => {
    setDivCount((prevCount) => prevCount + 1);
    
  };

  return (
    <center>
      <div className="container">
        <button onClick={handleAddDiv} className="button">
          ADD
        </button>
      </div>
      <br></br>
      <div className="container">
        <br></br>
        <br></br>
        <div className="Cam_hold">
          {Array.from({ length: divCount }).map((_, index) => (
            <div key={index}>
              <br></br>
              <center>
                <a className="my-text">Camera element {index}</a>
              </center>
              <br></br>
              {<Webcam className="Countain_box_add" />}
              <br></br>
              <center>
                <button onClick={getIpAddress} className="button">
                  Get IP
                </button>
                <br></br>
                <br></br>
                <button onClick={getCameraType} className="button">
                  Get Camera Type
                </button>
              </center>
              <br></br>
            </div>
          ))}
        </div>
      </div>
    </center>
  );
};

export default MyComponent;
