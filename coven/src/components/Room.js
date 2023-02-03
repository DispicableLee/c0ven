import React from "react";
import MessageTile from "./MessageTile";
import { useState, useEffect } from "react";

export default function Room() {
  const [messageHover, setMessageHover] = useState(false);
  const messageCount = [1, 1, 1];

  const renderedMessages = messageCount.map((m) => {
    return (
      <MessageTile/>
    );
  });

  function setHover() {
    setMessageHover(!messageHover);
  }
  return (
    <div
      className="room-div"
      style={{
        border: "1px solid white",
        height: "700px",
        margin: "20px",
        paddingTop: "0",
        display: "flex",
      }}
    >
      <div
        className="room-header-bar"
        style={{
          backgroundColor: "#34E4EA",
          width: "100%",
          height: "15%",
          position: "sticky",
        }}
      >
        <h1>Room</h1>
        <div>
            
        </div>
      </div>
      <br/>
      <aside
        className="message-board"
        onMouseEnter={setHover}
        onMouseLeave={setHover}
        style={{
          border: "1px solid #34E4EA",
          float: "right",
          backgroundColor: "black",
          display: "table-column",
          width: messageHover ? "40%" : "20%",
        }}
      >
        <div
          className="message-board-header"
          style={{
            backgroundColor: "#D30C7B",
            height: "7.5%",
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
