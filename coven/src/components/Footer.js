import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import { fontSize, maxHeight } from "@mui/system";
import UserData from "./UserData";
import { useNavigate } from "react-router-dom";
import '../styles/Footer.css'

export default function Footer() {
  const userID = localStorage.id;
  const navigate = useNavigate()
  function openDialog() {
    console.log("click");
    UserData.signOut()
    navigate("/")
  }
  return userID ? (
    // ========================= SIGN OUT STATE ======================================
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <button
          className="footer-button"
          onClick={openDialog}
          style={{
            backgroundColor: "#D30C7B",
            height: "125px",
            width: "15%",
            fontSize: "40px",
            top: 'auto',
            bottom: '0',
            right: '0',
            position: 'fixed'
          }}
        >
          Sign Out
        </button>
      </Toolbar>
  ) :
  //======================== SIGN IN STATE ===============================
  (
    <AppBar
      position="fixed"
      color="primary"
      sx={{
        top: "auto",
        bottom: 0,
        backgroundColor: "black",
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <button
          onClick={openDialog}
          style={{
            backgroundColor: "#D30C7B",
            height: "125px",
            width: "15%",
            fontSize: "40px",
          }}
        >
          Sign In
        </button>
      </Toolbar>
    </AppBar>
  );
}
