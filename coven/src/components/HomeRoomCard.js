import React from "react";
import Box from "@mui/material/Box";

export default function HomeRoomCard() {
  return (
    <div
      style={{
        border: "1px solid #D30C7B",
        color: "#D30C7B",
        margin: "20px",
        maxWidth: '400px',
        height: '400px',
        flex: '50%'
      }}
    >
      <Box>
        <div style={{
            backgroundColor: '#D30C7B',
            color: 'black',
            marginTop: '5px',
            height: '75px'
        }}>
            <h1>Room_name</h1>
            <h3>people currently here: </h3>
        </div>
      </Box>
        <Box style={{
            height: '40%'
        }}>

        
        </Box>
      <Box style={{
        // postion: 'absolute',
        borderTop: '1px solid #D30C7B',
        height: '20px'
      }}>
        <h1>i am not logged in</h1>
      </Box>
    </div>
  );
}
