import eventsModel from "../models/eventsModel.js";
import parksModel from "../models/parksModel.js";
import trailsModel from "../models/trailsModel.js";

const parksController = {
  index: (req, res) => {
    parksModel.find({}).then((parks) => {
      res.json(parks);
    });
  },
  indexById: (req, res) => {
    parksModel.findById(req.params.id).then((park) => {
      res.json(park);
    });
  },
  trails: (req, res) => {
    trailsModel.findById(req.params.id).then((trails) => {
      res.json(trails);
    });
  },
  events: (req, res) => {
    eventsModel.findById(req.params.id).then((events) => {
      res.json(events);
    });
  },
};

export default parksController;
