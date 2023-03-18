import express from "express";
import parksController from "../controllers/parksCont.js";

const parksRouter = express.Router();

parksRouter.get("/", parksController.index)

parksRouter.get("/trails/:id", parksController.trails)


export default parksRouter;