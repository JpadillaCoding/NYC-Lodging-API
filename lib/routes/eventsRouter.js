import express from "express";
import eventsController from "../controllers/eventsCont.js";

const eventsRouter = express.Router();

eventsRouter.get("/", eventsController.index);

eventsRouter.post("/", eventsController.createEvent);

eventsRouter.delete("/:id", eventsController.deleteEvent);

export default eventsRouter;
