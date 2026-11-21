import express from "express";
import {stdupdate, stdvalidate, studentData} from "../controllers/usercontrollers.js"

const routes =express.Router();

routes.post("/studentdata",studentData)
routes.get("/validate",stdvalidate)
routes.put("/:id",stdupdate)
export default routes;