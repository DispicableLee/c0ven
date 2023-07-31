import React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import RenderRoom from "./RenderRoom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../styles/HomeRoomCard.css'

export default function HomeRoomCard({name, image, admins, projects, id}) {
  const navigate = useNavigate()
  // console.log(name,id)
  const [roomFocused, setRoomFocused ] = useState(false)


  function roomFocus(){
    setRoomFocused(!roomFocused)
  }

  function showId(id){
    // navigate({`/room/${id}`)
  }


  return (
    <div className="card-box"
      onClick={()=>showId(id)}
      >
        <div className="title-pop-box">
            <Link to={`/room/${id}`}>{name}</Link>
            <h3>people currently here: </h3>
        </div>
        <Box style={{
            height: '40%'
        }}>
        </Box>
      <div className="card-footer">
        <h3>i am not logged in</h3>
      </div>
    </div>
  );
}
