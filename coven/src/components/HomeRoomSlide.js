import React from "react";
import HomeRoomCard from "./HomeRoomCard";
import { useState, useEffect } from "react";

export default function HomeRoomSlide(){
    const [homeRooms, setHomeRooms] = useState([])
    //api call to rooms database
    useEffect(()=>{
        fetch("http://localhost:4002/api/v2/endPoints/search/all/rooms")
        .then((r)=>r.json())
        .then((json)=>{
            console.log(json)
            setHomeRooms(json)
            console.log(homeRooms)
        })
    },[])
    // const homeRoomDisplay = homeRooms.map((room)=>{
        
    // })
    return (

        <div>
            <h1>
                hi
            </h1>
            <HomeRoomCard/>
        </div>
    )
}