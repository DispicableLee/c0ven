import React from "react";
import { useState, useEffect } from "react";

export default function MessageTile() {

    const [tileHover, setTileHover] = useState(false)
    function setHover(){
        setTileHover(!tileHover)
    }
  return (
    <div
      className="message-tile"
      style={{
        border: "1px solid white",
        marginTop: "10px",
        maxHeight: "100px",
        color: "white",
        paddingLeft: "20px",
      }}
    >
      <h3
        onMouseEnter={setHover}
        onMouseLeave={setHover}
        style={{
          color: tileHover ? "#D30C7B" : "white",
        }}
      >
        profile
      </h3>
      <p>hi</p>
    </div>
  );
}
