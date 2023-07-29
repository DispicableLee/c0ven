import React from "react";
import { useState } from "react";
import "../styles/SignUpIn.css"
import UserData from "./UserData";

export default function SignUpInDialog() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function signIn(){
    fetch(`http://localhost:4002/api/v2/endPoints/userlogin/${password}`)
    .then((r)=>r.json())
    .then((json)=>{
      console.log(json._id)
      UserData.setId(json._id)
      console.log(json.username)
      UserData.setUsername(json.username)
      console.log(json.password)
      UserData.setImage(json.image)
      console.log(json.image)
      window.location.reload()
    })
  }

  return (
    <dialog className="dialog-main">
      <div className="dialog-title">
        <h1>Sign In</h1>
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
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
