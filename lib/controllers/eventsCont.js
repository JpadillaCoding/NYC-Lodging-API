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
    deleteEvent:(req, res) => {
        eventsModel.findByIdAndDelete(req.params.id)
        .then(event => {
            res.json(event)
        });
    },

};

export default eventsController;