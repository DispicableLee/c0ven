import React from "react";
import HomeRoomExplorer from "./HomeRoomExplorer";
import "../styles/Home.css"
export default function Home() {
  return (
    <div id="home-div">
      <div id="home-room-div">
        <HomeRoomExplorer/>
      </div>
    </div>
  );
}
