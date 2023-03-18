import trailsModel from "../models/trailsModel.js";

const trailsController = {
    
    index: (req, res) => {
        trailsModel.find({})
        .then(trails => {
            res.json(trails)
        });
    },

};

export default trailsController;