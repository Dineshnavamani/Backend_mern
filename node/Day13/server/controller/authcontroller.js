import express from "express"

export const authController =async(req,res)=>{

    try {
        console.log(req.body)
    } catch (error) {
        console.log("error",error)
    }
}