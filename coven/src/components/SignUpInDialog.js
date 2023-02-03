import React from "react";
import { useState } from "react";
import UserData from "./UserData";

export default function SignUpInDialog() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [focus1, setFocus1] = useState(false);
  const [focus2, setFocus2] = useState(false);

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
    <dialog
      className="dialog-main"
      style={{
        backgroundColor: "black",
        color: "#D30C7B",
        display: "table-column",
        height: "45%",
        width: "25%",
        position: 'absolute'
      }}
    >
      <div
        style={{
          borderBottom: "1px solid #D30C7B",
        }}
      >
        <h1>SIGN UP/IN</h1>
      </div>
      <input
        onFocus={() => setFocus1(!focus1)}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
        style={{
          width: "100%",
          paddingTop: "40px",
          marginTop: "40px",
          backgroundColor: focus1 ? "#D30C7B" : "black",
          color: "white",
          fontSize: "25px",
        }}
      />
      <input
        onFocus={() => setFocus2(!focus2)}
        type="text"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          paddingTop: "40px",
          marginTop: "40px",
          backgroundColor: focus2 ? "#D30C7B" : "black",
          color: "white",
          fontSize: "25px",
        }}
      />
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
