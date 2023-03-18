import express from "express";
import boroughRouter from "./boroughRoutes.js";
import eventsRouter from "./eventsRouter.js";
import parksRouter from "./parksRouter.js";

const router = express.Router()

router.use('/boroughs', boroughRouter);

router.use('/parks', parksRouter);

router.use('/events', eventsRouter)

router.use('/', (req, res) => {
    res.send("welcome")
});

export default router