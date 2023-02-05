import React from "react";
import { useState } from "react";

export default function RoomUsers() {
    const [displayUsers, setDisplayUsers] = useState(false)

    function showUsers(){
        setDisplayUsers(!displayUsers)
    }

    
  return (
    <div>
      <button
        className="show-users-button"
        onClick={showUsers}
        style={{
          backgroundColor: "#D30C7B",
          height: "25%",
          width: "100%",
          boxShadow: "none",
        }}
      >
        USERS
      </button>
      <div
        className="show-users box"
        style={{
          backgroundColor: "wheat",
          height: "500%",
          width: "30%",
          visibility: displayUsers ? "visible" : "hidden",
        }}
      >
        
      </div>
    </div>
  );
}
