import { useState,useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
  ThemeProvider,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import Dropzone from "react-dropzone";
import FlexBetween from "components/FlexBetween";

import Navbar from "scenes/navbar";
import WidgetWrapper from "components/WidgetWrapper";


const editSchema = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string(),
  location: yup.string(),
  occupation: yup.string(),
  //picture: yup.string().required("required"),
});




const initialValuesEdit = {
  firstName: "",
  lastName: "",
  location: "",
  occupation: "",
  picture: "",
};



const EditForm = () => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const {_id} = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  




const edit= async (values, onSubmitProps) =>{


const response=await fetch(`http://localhost:3001/edits/editing/${_id}`, { 

method: "POST",
  headers:{ 
    Authorization: `Bearer ${token}` , 
    "Content-Type": "application/json",
  },
body: JSON.stringify({
  firstName:values.firstName,
  lastName:values.lastName,
  Occupation:values.occupation,
  Location:values.location,
}
)
});

onSubmitProps.resetForm();
console.log(values.occupation)
navigate("/home");

}





const handleFormSubmit = async (values, onSubmitProps) => {
    await edit(values, onSubmitProps);
    console.log(values.picture)
  };
  
  console.log(_id)

  return (
   
       <div>
        <Navbar/>
        <Typography textAlign={"center"} ><h2>Edit Account Information</h2></Typography>
        <WidgetWrapper display={"flex"} justifyContent="center" color={"grey"}>

   {<Formik
   onSubmit={handleFormSubmit}
   initialValues={initialValuesEdit}
   >
{({
  values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
})=>(
  <form onSubmit={handleSubmit}
          
  >
    
    <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
            width={"50"}
          >
         
      <TextField 
      label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  type="firstName"
                  error={
                    Boolean(touched.firstName) && Boolean(errors.firstName)
                  }
                  helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: "span 2" }}
                  ></TextField>

      <TextField 
      label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  type="lastName"
                  error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  sx={{ gridColumn: "span 2" }}
     />

      <TextField  label="Location"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.location}
                  name="location"
                  type="location"
                  error={Boolean(touched.location) && Boolean(errors.location)}
                  helperText={touched.location && errors.location}
                  sx={{ gridColumn: "span 4" }}/>

    <TextField  label="Occupation"
                 onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.occupation}
                  name="occupation"
                  type="occupation"
                 error={
                    Boolean(touched.occupation) && Boolean(errors.occupation)
                  }
                 helperText={touched.occupation && errors.occupation}
                  sx={{ gridColumn: "span 4" }}/>
            
                  </Box>
 
        <Box
          >
            <Button
             fullWidth
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: palette.primary.main,
                color: palette.background.alt,
                "&:hover": { color: palette.primary.main },
              }}
            
            >Submit</Button>
                  </Box>

                
</form>
      )}
            </Formik>}
            </WidgetWrapper>
   </div>
  )
};

export default EditForm;