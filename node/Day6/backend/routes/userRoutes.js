import express from "express"
import bodydata from "../controllers/dataControllers.js"
// import querydata  from"../controllers/dataControllers.js"
// import paramsdata from "../controllers/dataControllers.js"
// import headersdata from "../controllers/dataControllers.js"


export const userRouters = express.Router()

//http://localhost:5000/api/data/bodydata
//http://localhost:5000/api/data/querydata?
//http://localhost:5000/api/data/paramsdata/:userid
// http://localhost:5000/api/data/headers

userRouters.post("/bodydata",bodydata);
// userRouters.get("/querydata",querydata);
// userRouters.get("/paramsdata",paramsdata);
// userRouters.get("/headersdata",headersdata)