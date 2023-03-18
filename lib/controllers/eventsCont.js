import eventsModel from "../models/eventsModel.js";

const eventsController = {
    
    index: (req, res) => {
        eventsModel.find({})
        .then(events => {
            res.json(events)
        });
    },
    createEvent: (req, res) => {
        eventsModel.create(req.body)
        .then(event => {
            res.json(event)
        })
    },

};

export default eventsController;