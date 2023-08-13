import React from "react";
import { useState, useEffect } from "react";
import HomeRoomExplorer from "./HomeRoomExplorer";
import NavBar from "./NavBar";
import "../styles/Home.css"
export default function Home() {
  const [fetchedRooms, setFetchedRooms] = useState([])

  useEffect(()=>{
        fetch("http://localhost:4002/api/v2/endPoints/search/all/rooms")
          .then((res)=>res.json())
          .then((json)=>{
            setFetchedRooms(json)
          });
        
    },[])

  console.log(localStorage.id)
  return (
    <div id="home-div">
      <div id="home-room-div">
        <HomeRoomExplorer fetchedRooms={fetchedRooms}/>
      </div>
    </div>
  );
}
