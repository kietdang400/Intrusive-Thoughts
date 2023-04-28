import User from "../models/User.js";
import bcrypt from "bcrypt";

export const UpdatePersonalInfo=async(req,res)=>{

     try{
      const{id,password}=req.params;
      const{firstName,lastName,Occupation,Location}=req.body;
const user=await User.findByIdAndUpdate(id,{$set:{
  firstName:firstName, 
  lastName:lastName,
  occupation:Occupation,
  location:Location,
 
}
},{new:true})
      
      await user.save();
      const Users=await User.findById(id);

res.status(201).json(user);
console.log(user);

    }catch(err){
       res.status(404).json({ message: err.message });
    }
  
  };