import eventsModel from "../models/eventsModel.js";

const eventsController = {
    
    index: (req, res) => {
        eventsModel.find({})
        .then(events => {
            res.json(events)
        });
    },

};

export default eventsController;