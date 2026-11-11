import express from "express"

export const userRouters = express.Router()


userRouters.post("/bodydata",bodydata);
userRouters.get("/querydata",querydata);
userRouters.get("/paramsdata",)