import React,{useState} from "react";
import Navbar from "scenes/navbar";
import WidgetWrapper from "components/WidgetWrapper";
import FlexBetween from "components/FlexBetween";
import { Box, Divider, IconButton, Typography, useTheme, useMediaQuery, Button} from "@mui/material";
const FAQ=()=>{
const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;
    const medium = palette.neutral.medium;
    const dark = palette.neutral.dark;
     const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

const[display1,setDisplay1]=useState(false);
const[display2,setDisplay2]=useState(false);
const[display3,setDisplay3]=useState(false);
const[display4,setDisplay4]=useState(false);
const[display5,setDisplay5]=useState(false);


    return(
        <div>
            <Navbar></Navbar>
            <Typography textAlign={"center"} fontSize={"500"}><h1>Frequently Asked Questions</h1></Typography>
            <WidgetWrapper  color={"grey"}>
        <Box
        display={"flex"} justifyContent="center"
        >
    <Typography color={main}
            variant="h5"
            fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}>
        <Button   sx={{ gridColumn: "span 2" }} onClick={()=>{setDisplay1(!display1)}} ><h2>What is this Social Media App?</h2></Button>
    </Typography>
</Box>
{display1&&<Box display={"flex"} justifyContent="center" border={`1px solid ${medium}`}
          borderRadius="5px"
          mt="1rem"
          p="1rem">
   <Typography color={medium}>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
   </Typography>
            </Box>}
<Divider sx={{ margin: "1.25rem 0" }} />

<Box
display={"flex"} justifyContent="center">
     <Typography color={main}
            variant="h5"
            fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
               >
    <Button sx={{ gridColumn: "span 2" }} onClick={()=>{setDisplay2(!display2)}}><h2>How can I add Friends?</h2></Button>
</Typography>
</Box>
{display2&&<Box display={"flex"} justifyContent="center" border={`1px solid ${medium}`}
          borderRadius="5px"
          mt="1rem"
          p="1rem">
   <Typography color={medium}>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
   </Typography>
            </Box>}
    <Divider sx={{ margin: "1.25rem 0" }} />

<Box
display={"flex"} justifyContent="center">
    <Typography color={main}
            variant="h5"
            fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}>
    <Button  sx={{ gridColumn: "span 2" }} onClick={()=>{setDisplay3(!display3)}}><h2>Why should I stay?</h2> </Button>
    </Typography>
</Box>
{display3&&<Box display={"flex"} justifyContent="center" border={`1px solid ${medium}`}
          borderRadius="5px"
          mt="1rem"
          p="1rem">
   <Typography color={medium}>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
   </Typography>
            </Box>}
<Divider sx={{ margin: "1.25rem 0" }} />

<Box
display={"flex"} justifyContent="center">
    <Typography color={main}
            variant="h5"
            fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}>
    <Button  sx={{ gridColumn: "span 2" }} onClick={()=>{setDisplay4(!display4)}}><h2>Are they really Sociopaths?</h2> </Button>
    </Typography>
</Box>
{display4&&<Box display={"flex"} justifyContent="center" border={`1px solid ${medium}`}
          borderRadius="5px"
          mt="1rem"
          p="1rem">
   <Typography color={medium}>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
   </Typography>
            </Box>}
<Divider sx={{ margin: "1.25rem 0" }} />

            <Box
display={"flex"} justifyContent="center">
    <Typography color={main}
            variant="h5"
            fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}>
    <Button  sx={{ gridColumn: "span 2" }} onClick={()=>{setDisplay5(!display5)}}><h2>What if I forget my password?</h2> </Button>
    </Typography>
</Box>
<Divider sx={{ margin: "1.25rem 0" }} />

{display5&&<Box display={"flex"} justifyContent="center" border={`1px solid ${medium}`}
          borderRadius="5px"
          mt="1rem"
          p="1rem">
   <Typography color={medium}>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
   </Typography>
            </Box>}
            </WidgetWrapper>
            
        </div>
    )
}
export default FAQ