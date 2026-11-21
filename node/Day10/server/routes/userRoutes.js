import express from "express";
import insertdata from "../controllers/userControlers.js"

//http://localhost:5000/api/crud/insert

const routes =express.Router();

routes.post("/insert",insertdata)

export default routes