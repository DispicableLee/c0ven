import "./App.css";
import { Location } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SignUpInDialog from "./components/SignUpInDialog";
import Footer from "./components/Footer";
import Room from "./components/Room";
import ProjectsList from "./components/ProjectsList";
import UploadNewProject from "./components/UploadNewProject";
import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import UserData from './components/UserData'

function App() {
  //==================== dialog states ===========================
  const [dialogState, setDialogState] = useState(false);
  function openSignUpIn() {
    setDialogState(!dialogState);
  }

  return (
  <div>
    <div className="App">
      <NavBar />
      {/* ============ sign in dialog ============================== */}
      <div style={{
        color: 'white'
      }}
      >
        <h1>Developer's Note:</h1>
        <p>This project might not have as much to do with witches or witchcraft as the name of this project might suggest. 
          I envision this project as something of a cross between Github, Behance and Discord, 
          though not nearly as complex as either (though I will try my best). </p>
      </div>
      {dialogState ? (
        <SignUpInDialog/>
      ) : (
        <></>
      )}
      {/* ================ footer ===================== */}
      <Footer openSignUpIn={openSignUpIn} />
    </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects-list" element={<ProjectsList/>}/>
        <Route path="/room/:roomid" element={<Room/>} />
        <Route path="upload-new-project" element={<UploadNewProject/>}/>
      </Routes>
  </div>
  );
}

export default App;
