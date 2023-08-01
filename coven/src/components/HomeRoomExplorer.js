import React from "react";
import HomeRoomCard from "./HomeRoomCard";
import { useState, useEffect } from "react";
import '../styles/HomeRoomExplorer.css'
import { useNavigate } from "react-router-dom";

export default function HomeRoomExplorer(){
    const navigate = useNavigate()
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

        <div id="explorer-home">
            <h1 id="tit">Rooms</h1>
            <div id="explorer-window">
                <aside>
                    <div className="slide-name">
                        <h1>my rooms</h1>
                    </div>
                        <div id="room-slides">
                            {myRooms}
                        </div>
                </aside> 
                <aside>
                    <div className="slide-name">
                        <h1>Joined Rooms</h1>
                    </div>
                        <div id="room-slides">
                            {joinedRooms}
                        </div>
                </aside>
            </div>
                <h1 id="button-expand" >See all Rooms</h1>
                <h1 id="button-expand" 
                    onClick={(e)=>navigate("/projects-list")}
                >Projects</h1>
        </div>
    )
}