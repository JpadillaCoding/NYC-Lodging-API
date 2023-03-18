import express from "express";
import boroughController from "../controllers/boroughsCont.js";

const boroughRouter = express.Router();

/** 
    @swagger
    components:
        schemas:
            boroughsModel:
                type: object
                required: 
                -borough
                -parks
                properties:
                    id:
                        type: string
                        description: Auto generated ID
                    borough:
                        type: string
                        description: Borough in NYC
                    parks:
                        type: mongoose.Schema.Types.ObjectId
                        ref: parksmModel
                        description: Parks in that borough
                example: 
                id: fkakdjajcakkcs
                borough: Bronx
                parks: [
                    ObjectId("6415d32d5e92e976e81fc12f"),
                    ObjectId("6415d32d5e92e976e81fc130")
                ]
**/

boroughRouter.get("/", boroughController.index);
boroughRouter.get("/:id", boroughController.borough);

export default boroughRouter;
