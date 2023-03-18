import express from "express";
import boroughController from "../controllers/boroughsCont.js";

const boroughRouter = express.Router();
/**
 * @api {get} /boroughs Get Boroughs in NYC
 * @apiVersion 1.0.0
 * @apiName GetBoroughs
 * @apiGroup Boroughs
 */
boroughRouter.get("/", boroughController.index);

boroughRouter.get("/:id", boroughController.borough);

export default boroughRouter;
