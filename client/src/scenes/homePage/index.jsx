import React,{useState} from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import AdvertWidget from "scenes/widgets/AdvertWidget";
import FriendListWidget from "scenes/widgets/FriendListWidget";
import MessengerWidget from "scenes/widgets/MessengerWidget";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  const[displayingMessage,setDisplayingMessage]=useState(true);

const displayMessage=(state)=>{
  setDisplayingMessage(state)
};

  return (
    <Box>
      <Navbar DisplayMessage={displayMessage} />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined} >
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%" >
  <AdvertWidget />
           {displayingMessage&& <Box m="2rem ">
        <MessengerWidget userId={_id} picturePath={picturePath} closeMessage={displayMessage}>
        </MessengerWidget>
      </Box>
          }
          
           
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
