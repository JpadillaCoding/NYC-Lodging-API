import express from "express";
import trailsController from "../controllers/trailsCont.js";

const trailsRouter = express.Router();

trailsRouter.get("/", trailsController.index)

export default trailsRouter;