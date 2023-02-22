var RenderRoom = (function(){
    //initialize datasets
    var roomID = ""


    //set data 

    var setRoomID = (id) =>{
        roomID = id
        console.log(roomID)
    }


    return {
        setRoomID: setRoomID
    }
})()

export default RenderRoom