import express from "express";
import parksController from "../controllers/parksCont.js";

const parksRouter = express.Router();

parksRouter.get("/", parksController.index)

export default parksRouter;