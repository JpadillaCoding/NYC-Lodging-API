import express from "express";
import parksCont from "../controllers/parksCont.js";

const parksRouter = express.Router();

parksRouter.get("/", parksCont.index)

export default parksRouter;