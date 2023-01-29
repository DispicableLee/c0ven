import React from "react";
import { Box } from "@mui/system";

export default function HomeRoomCard(){
    return (
        <Box style={{
            border: 'rgb(211,12,123)',
            color: '#D30C7B'
        }}>
            <Box>
            <h1>
                HomeRoomCard,<br/>
                i am logged in
            </h1>
            </Box>
            <Box>
                <h1>
                    i am not logged in
                </h1>
            </Box>
        
        </Box>
    )
}