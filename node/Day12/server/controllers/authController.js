import mongoose from "mongoose";

export const authController = async(req,res)=>{

    try {
        const {username,useremail,userpassword}=req.body
        
        console.log(req.body)
    } catch (error) {
        console.log(error.message)
    }
}
