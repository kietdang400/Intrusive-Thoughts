import React,{useState} from "react";
import { Typography, useTheme,Divider, Box, Button, IconButton,useMediaQuery } from "@mui/material";
import {Close, MoreHoriz,ArrowDropDown,ArrowDropUp} from "@mui/icons-material"
import { useSelector } from "react-redux";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import UserImage from "components/UserImage";
import Friend from "components/Friend";

const MessengerWidget=(props)=>{
const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const { _id, picturePath } = useSelector((state) => state.user);
   const friends = useSelector((state) => state.user.friends);
const[translateMessage,setTranslateMessage]=useState(true)
  
    return(


       <WidgetWrapper style={translateMessage?{position:"fixed", top:"89%",width:"25%"}:{position:"fixed", top:"25%",width:"25%",height:"500px"}}>{/*translate the widget up when the arrow is clicked*/}
<IconButton style={{float:"right"}} onClick={()=>{props.closeMessage(false)}} >
    <MoreHoriz></MoreHoriz>
</IconButton>
<IconButton style={{float:"right"}} onClick={()=>{setTranslateMessage(!translateMessage)}} >
    {translateMessage? <ArrowDropUp></ArrowDropUp>:<ArrowDropDown></ArrowDropDown>}
</IconButton>
{/* Message Tab Header*/}
        <FlexBetween gap="0.5rem" height={"50px"}
        pb="1.1rem">
            <FlexBetween gap="1rem">
            <UserImage image={picturePath} ></UserImage>
            <Typography color={dark} variant="h5" fontWeight="250" >
                Messaging
            </Typography>
        </FlexBetween>
           </FlexBetween>

<Divider gap="1rem"/>

 

{/*Friends*/}
{
  <Box p="1rem 0" style={{overflowY:"scroll",height:"380px"}}>
<Box display="flex" flexDirection="column" gap="1.5rem" >

        {friends.map((friend) => (

    <Button onClick={()=>{console.log("hello")}} >
      <FlexBetween
       gap="0.5rem"
        pb="1.1rem"
      >
        <FlexBetween gap="1rem" >
            <UserImage image={friend.picturePath} size="55px"></UserImage>
<Box>
     <Typography
            color={main}
            variant="h7"
            fontWeight="500"
          >
            {friend.firstName} {friend.lastName}
          </Typography>
    <Typography color={medium} fontSize="0.75rem">{friend.occupation}</Typography>
</Box>
        </FlexBetween>
      </FlexBetween>
      </Button>
      
        ))}
      </Box>
  </Box>

}
     </WidgetWrapper> 
    )
};

export default MessengerWidget