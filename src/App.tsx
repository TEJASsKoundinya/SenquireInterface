import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeInfo from "./assets/HomeInfo";
import CreateRecord from "./assets/CreateRecord";
import AboutCam from "./assets/AboutCam";
import AboutVideo from "./assets/AboutVideo";
import UserInfo from "./assets/UserInfo";
import AnalyzerWindow from "./assets/AnalyzerWindow";
import ParticleComponent from "./assets/ParticleComponent";
import VerticalNavBar from "./NavBar";
import DataHandel from "./assets/DataHandel";

import "./App.css";
const App: React.FC = () => {


  return (
    <Router>
      <div style={{ display: "block" }}>
        <VerticalNavBar />
        <Routes>
          <Route path="/ParticleComponent" element={<ParticleComponent />} />
          <Route path="/HomeInfo" element={<HomeInfo />} />
          <Route path="/CreateRecord" element={<CreateRecord />} />
          <Route path="/AboutCam" element={<AboutCam />} />
          <Route path="/AboutVideo" element={<AboutVideo />} />
          <Route path="/UserInfo" element={<UserInfo />} />
          <Route path="/AnalyzerWindow" element={<AnalyzerWindow />} />
          <Route path="/DataHandel" element={<DataHandel />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


