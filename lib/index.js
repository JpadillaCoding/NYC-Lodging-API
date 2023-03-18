import express from "express";
import router from "./routes/routesIndex.js";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "nyc prks and amenities",
      version: "1.0.0",
      description: "An api showing parks and amenities by boroughs in nyc",
    },
    servers: [
      {
        url: "http://localhost:4000",
        description: "Local server",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJSDoc(options);

const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(express.json());

app.use("/", router);

app.listen(4000, () => console.log("Run forest run on port 4000"));
