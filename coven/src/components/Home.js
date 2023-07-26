import React from "react";
import HomeRoomSlide from "./HomeRoomSlide";
export default function Home() {
  return (
    <div style={{
      color: 'white',
      // padding: '40px',
    }}>
      <div style={{
        // paddingLeft: '40px',
        width: '100vh',
        display: 'flex',
        justifyContent: 'center'
        // float: 'left'
      }}>
        <HomeRoomSlide/>
      </div>
    </div>
  );
}
