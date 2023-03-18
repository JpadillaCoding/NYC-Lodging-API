import parksModel from "../models/parksModel.js";
import trailsModel from "../models/trailsModel.js";

const parksController = {
    
    index: (req, res) => {
        parksModel.find({})
        .then(parks => {
            res.json(parks)
        });
    },
    trails: (req, res) => {
        trailsModel.findById(req.params.id)
        .then(trails => {
            res.json(trails)
        });
    },

};

export default parksController;