import React from "react";
import RoomUsers from "./RoomUsers";
import "./Room.css";
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
        <div className="room-title">
          <h1>Room</h1>
          <button className="show-users-button" onClick={showUsers}>
            USERS
          </button>
        </div>
        {/* ==================== room users box ====================================== */}
        <div
          className="show-users box"
          style={{
            backgroundColor: "black",
            height: "450%",
            width: "30%",
            visibility: displayUsers ? "visible" : "hidden",
            paddingTop: "10px",
            overflow: 'auto'
          }}
        >
          {roomUsers}
        </div>
      </div>
      <br />
      <aside
        className="message-board"
        onMouseEnter={setHover}
        onMouseLeave={setHover}
        style={{
          float: "right",
          backgroundColor: "black",
          width: messageHover ? "30%" : "20%",
          height: "400",
          overflow: "auto",
        }}
      >
        <div
          className="message-board-header"
          style={{
            backgroundColor: "#D30C7B",
            width: "100%",
            height: "7.5%",
            position: "static",
          }}
        >
          <h2>messages</h2>
        </div>
        {renderedMessages}
      </aside>
      <div
        className="room-bottom"
        style={{
          borderTop: "1px solid #34E4EA",
          width: "90%",
          height: "10%",
          position: "absolute",
          bottom: "0",
        }}
      ></div>
    </div>
  );
}
