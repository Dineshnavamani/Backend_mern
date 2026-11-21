import express from "express"
import {authController} from "../controller/authcontroller.js"


const route =express.Router();

route.post("/authdata",authController)


export default route