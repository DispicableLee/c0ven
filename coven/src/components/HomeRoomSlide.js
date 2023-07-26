import React from "react";
import HomeRoomCard from "./HomeRoomCard";
import { useState, useEffect } from "react";
import '../components/HomeRoomSlide.css'

export default function HomeRoomSlide(){
    const myRoomArray = [1,2]
    const [fetchedRooms, setFetchedRooms] = useState([])
    //=========================== initial rooms fetch ==========================
    useEffect(()=>{
        fetch("http://localhost:4002/api/v2/endPoints/search/all/rooms")
          .then((res)=>res.json())
          .then((json)=>{
            setFetchedRooms(json)
          });
        
    },[])
    console.log(fetchedRooms)
    const myRooms = myRoomArray.map((r)=>{
        return (
            <HomeRoomCard 
            />
        )
    })
    const joinedRooms = fetchedRooms.map((r)=>{
        return (
            <HomeRoomCard 
                name = {r.name}
                image = {r.image}
                admins = {r.admins}
                projects = {r.projects}
                id = {r._id}
            />
        )
    })
    // ======================= return ========================================
    return (

        <div id="rooms-gallery">
            <aside className="room-slide-container">
                <h1>my rooms</h1>
                {myRooms}
            </aside> 

            <aside className="room-slide-container">
                <h1>Joined Rooms</h1>
                {joinedRooms}
            </aside>
        </div>
    )
}