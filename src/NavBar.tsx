import React from 'react';
import { Link } from 'react-router-dom';
import { GoHomeFill } from "react-icons/go";
import { BiSolidMessageAltAdd, BiSolidVideoPlus } from "react-icons/bi";
import { MdCameraEnhance } from "react-icons/md";
import { PiVideoCameraFill } from "react-icons/pi";
import { FiCodesandbox } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { AiFillDatabase } from "react-icons/ai"
import "./App.css";


const VerticalNavBar: React.FC = () => {
      const ClickInfo = () => {
        console.log("Entry")
      };
  return (
    <nav className="vertical-navbar">
      <ul>
        <li>
          <img className="Fitlogo" src="./logo.png" />
        </li>
        <li>
          <Link to="/ParticleComponent">
            <GoHomeFill className="icon" onClick={ClickInfo} />
          </Link>
        </li>
        {/* this is reffered as HomeInfo but does url video addition */}
        <li>
          <Link to="/HomeInfo">
            <BiSolidVideoPlus className="icon" onClick={ClickInfo} />
          </Link>
        </li>
        <li>
          <Link to="/CreateRecord">
            <BiSolidMessageAltAdd className="icon" onClick={ClickInfo} />
          </Link>
        </li>
        <li>
          <Link to="/AboutCam">
            <MdCameraEnhance className="icon" onClick={ClickInfo} />
          </Link>
        </li>
        <li>
          <Link to="/AboutVideo">
            <PiVideoCameraFill className="icon" onClick={ClickInfo} />
          </Link>
        </li>
        <li>
          <Link to="/AnalyzerWindow">
            <FiCodesandbox className="icon" onClick={ClickInfo} />
          </Link>
        </li>
        <li>
          <Link to="/DataHandel">
            <AiFillDatabase onClick={ClickInfo} className="icon" />
          </Link>
        </li>
        <li>
          <Link to="/UserInfo">
            <FaUserCircle onClick={ClickInfo} className="icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default VerticalNavBar;