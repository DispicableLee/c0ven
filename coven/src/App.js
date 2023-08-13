import "./App.css";
import { Location } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SignUpInDialog from "./components/SignUpInDialog";
import Footer from "./components/Footer";
import Room from "./components/Room";
import ProjectsExplorer from "./components/ProjectsExplorer";
import UploadNewProject from "./components/UploadNewProject";
import SplashPage from "./components/SplashPage";
import ProfileMain from "./components/ProfileMain";
import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import UserData from './components/UserData'

function App() {
  //==================== dialog states ===========================
  const [dialog, setDialog] = useState(false)
  useEffect(()=>{
    if(localStorage.id){
      setDialog(!dialog)
    }
  },[])

  return (
  <div>
    <div className="App">
      {dialog? <NavBar/> : <></>}
      {dialog? <Footer/> : <></>}


    </div>
      <Routes>
        <Route path="/" element={<SplashPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/projects-explorer" element={<ProjectsExplorer/>}/>
        <Route path="/room/:roomid" element={<Room/>} />
        <Route path="upload-new-project" element={<UploadNewProject/>}/>
        <Route path="/profile-main" element={<ProfileMain/>}/>
      </Routes>
  </div>
  );
}

export default App;
