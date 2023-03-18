import express from "express";
import trailsController from "../controllers/trailsCont.js";

const trailsRouter = express.Router();

trailsRouter.get("/", trailsController.index);

trailsRouter.put("/:id", trailsController.updatePark);

export default trailsRouter;
