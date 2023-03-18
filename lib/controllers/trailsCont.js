import trailsModel from "../models/trailsModel.js";

const trailsController = {
    
    index: (req, res) => {
        trailsModel.find({})
        .then(trails => {
            res.json(trails)
        });
    },
    updatePark: (req, res) => {
        trailsModel.findOneAndUpdate({_id: req.params.id}, req.body)
        .then(trail => {
            res.json(trail)
        });
    },

};

export default trailsController;