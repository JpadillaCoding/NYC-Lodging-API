import trailsModel from "../models/trailsModel.js";

const trailsController = {
    
    index: (req, res) => {
        trailsModel.find({})
        .then(trails => {
            res.json(trails)
        });
    },
/*     updatePark: (req, res) => {
        trailsModel.findOneAndUpdate({id})
    } */

};

export default trailsController;