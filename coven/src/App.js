import "./App.css";
import { Location } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SignUpInDialog from "./components/SignUpInDialog";
import Footer from "./components/Footer";
import Room from "./components/Room";
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
      {dialogState ? (
        <SignUpInDialog/>
      ) : (
        <h1>IUB!#FOEIQWIODJW</h1>
      )}
      {/* ================ footer ===================== */}
      <Footer openSignUpIn={openSignUpIn} />
    </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/room/:roomid" element={<Room/>} />
      </Routes>
  </div>
  );
}

export default App;
