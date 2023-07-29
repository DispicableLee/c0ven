import React from "react";
import RoomUsers from "./RoomUsers";
import "../styles/Room.css";
import MessageTile from "./MessageTile";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Room() {
  const [messageHover, setMessageHover] = useState(false);
  const [displayUsers, setDisplayUsers] = useState(false);
  const messageCount = [1, 1, 1, 1, 1, 1, 1, 1];
  const userCount = [1, 1, 1, 1,1,1,1,1,1,1,];
  const [fecthedMessages, setFecthedMessages] = useState([]);
  let {roomid} = useParams()

  useEffect(() => {
    console.log(roomid)
    fetch(`http://localhost:4002/api/v2/endPoints/search/room/${roomid}`)
         .then((r)=>r.json())
         .then((json)=>{
             console.log(json)
           })
  }, []);

  //============== show user box open close =============================================
  function showUsers() {
    setDisplayUsers(!displayUsers);
  }

  function setHover() {
    setMessageHover(!messageHover);
  }

  //======================= data mapping ========================================
  const renderedMessages = messageCount.map((m) => {
    return <MessageTile />;
  });
  //============================================
  const roomUsers = userCount.map((u) => {
    return (
      <div className="room-user-card"
      >
        <h1>hi</h1>
      </div>
    );
  });

  return (
    <div className="room-div">
      <div className="room-header-bar">
          <h1>Room</h1>
          <div id="dropdown-users">
            <button className="drp-btn">

            </button>
          </div>
      </div>
      <br />
      <div className="room-bottom">

      </div>
    </div>
  );
}
