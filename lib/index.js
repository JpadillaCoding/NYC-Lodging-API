import express from "express";
import router from "./routes/routesIndex.js";


const app = express();

app.use(express.json());

app.use("/", router);

app.listen(4000, () => console.log("Run forest run on port 4000"));
