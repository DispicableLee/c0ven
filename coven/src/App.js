import "./App.css";
import { Location } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SignUpInDialog from "./components/SignUpInDialog";
import Footer from "./components/Footer";
import Room from "./components/Room";
import ProjectsList from "./components/ProjectsList";
import UploadNewProject from "./components/UploadNewProject";
import SplashPage from "./components/SplashPage";
import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import UserData from './components/UserData'

function App() {
  //==================== dialog states ===========================

  return (
  <div>
    <div className="App">
      <SplashPage/>
    </div>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/projects-list" element={<ProjectsList/>}/>
        <Route path="/room/:roomid" element={<Room/>} />
        <Route path="upload-new-project" element={<UploadNewProject/>}/>
      </Routes>
  </div>
  );
}

export default App;
