import {
  ChatBubbleOutlineOutlined,
  Delete,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "state";
import UserImage from "components/UserImage";
import { useResolvedPath } from "react-router-dom";

const PostWidget = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments,
}) => {
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;


  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;
    const medium = palette.neutral.medium;
    const dark = palette.neutral.dark;
  const patchLike = async () => {
    const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: loggedInUserId }),
    });
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };

  const deletePost=async()=>{
    
    const response = await fetch(`http://localhost:3001/posts/${postId}/delete`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({})
    }); 
  const updatedPost = await response.json();
dispatch(setPost({ post: updatedPost }));
  
  }

  const[deleteButton,setdeleteButton]=useState(false)
  const[addFriend,setAddFriend]=useState(true)
  const[MyImage,setMyImage]=useState(true)
  useEffect(()=>{
    if(user._id===postUserId){
setdeleteButton(true)
setAddFriend(false)
setMyImage(false)
    }
  },[])


  return (
    <WidgetWrapper m="2rem 0">
{deleteButton&&
<IconButton onClick={deletePost} style={{float:"right"}}>
  <Delete ></Delete>
</IconButton>
}

{addFriend&&
 <Friend
        friendId={postUserId}
        name={name}
        subtitle={location}
        userPicturePath={userPicturePath}
      />
}  

<FlexBetween  gap="0.5rem"
        pb="1.1rem"  >
  <FlexBetween gap="1rem">
    {MyImage?"":<UserImage image={userPicturePath} />}
  <Box>
{MyImage?"":<Typography  color={main}
            variant="h5"
            fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}>{user.firstName} {user.lastName}</Typography>
              }

{MyImage?"":<Typography color={medium} fontSize="0.75rem"
              >{user.location}</Typography>}
</Box>
</FlexBetween>
 </FlexBetween>


      <Typography color={main} sx={{ mt: "1rem" }}>
        {description}
      </Typography>
   
  
      

      <FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <IconButton onClick={patchLike}>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: primary }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>
            <Typography>{likeCount}</Typography>
          </FlexBetween>

          <FlexBetween gap="0.3rem">
            <IconButton onClick={() => setIsComments(!isComments)}>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography>{comments.length}</Typography>
          </FlexBetween>
        </FlexBetween>

        <IconButton>
          <ShareOutlined />
        </IconButton>
      </FlexBetween>
      {isComments && (
        <Box mt="0.5rem">
          {comments.map((comment, i) => (
            <Box key={`${name}-${i}`}>
              <Divider />
              <Typography sx={{ color: main, m: "0.5rem 0", pl: "1rem" }}>
                {comment}
              </Typography>
            </Box>
          ))}
          <Divider />
        </Box>
      )}
    </WidgetWrapper>
  );
};

export default PostWidget;
