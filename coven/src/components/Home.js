import React from "react";
import HomeRoomSlide from "./HomeRoomSlide";
export default function Home() {
  return (
    <div style={{
      color: 'white',
      padding: '40px',
    }}>
      <aside style={{
        paddingLeft: '40px',
        // position: 'relative',
        float: 'left'
      }}>
        <h1>
          Rooms
        </h1>
        <HomeRoomSlide/>
      </aside>
    </div>
  );
}
