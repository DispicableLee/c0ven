import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

export default function FooterSignOut(openDialog) {
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
        top: "auto",
        bottom: "0",
        right: "0",
        position: "fixed",
      }}
    >
      Sign Out
    </button>
  </Toolbar>;
}
