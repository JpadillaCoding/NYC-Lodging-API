import express from "express";
import boroughRouter from "./boroughRoutes";

const router = express.Router()

router.use('/boroughs', boroughRouter);

router.use('/', (req, res) => {
    res.send("welcome")
});

export default router