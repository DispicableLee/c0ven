import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignUpIn.css"
import UserData from "./UserData";

export default function SignUpInDialog() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function signIn(){
    fetch(`http://localhost:4002/api/v2/endPoints/userlogin/${username}/${password}`)
    .then((r)=>r.json())
    .then((json)=>{
      console.log(json._id)
      UserData.setId(json._id)
      UserData.setUsername(json.username)
      UserData.setImage(json.image)
      navigate("/home")
    })
  }

  return (
    <dialog className="dialog-main">
      <div className="dialog-title">
        <h1>Sign In</h1>
      </div>
      <div className="input-box">
        <input type="text" placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input type="text" placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div
        style={{
          position: "relative",
          width: "100",
        }}
      >
        <button
          onClick={signIn}
          style={{
            right: "30",
          }}
        >
          Sign in
        </button>
      </div>
    </dialog>
  );
}
