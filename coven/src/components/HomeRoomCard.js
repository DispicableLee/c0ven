import React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import '../components/HomeRoomCard.css'

export default function HomeRoomCard() {
  const [roomFocused, setRoomFocused ] = useState(false)
  function roomFocus(){
    setRoomFocused(!roomFocused)
  }
  return (
    <div className="card-header"
    >
      <Box>
        <div className="card-box">
            <h1>Room_name</h1>
            <h3>people currently here: </h3>
        </div>
      </Box>
        <Box style={{
            height: '40%'
        }}>

        
        </Box>
      <Box className="card-footer">
        <h1>i am not logged in</h1>
      </Box>
    </div>
  );
}
