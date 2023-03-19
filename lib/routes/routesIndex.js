import express from "express";
import boroughRouter from "./boroughRoutes.js";
import eventsRouter from "./eventsRouter.js";
import parksRouter from "./parksRouter.js";
import trailsRouter from "./trailsRoutes.js";

const router = express.Router();

router.use("/boroughs", boroughRouter);

router.use("/parks", parksRouter);

router.use("/events", eventsRouter);

router.use("/trails", trailsRouter);

router.use("/", function (req, res) {
  res.redirect("/boroughs");
});

export default router;
