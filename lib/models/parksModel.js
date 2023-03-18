import mongoose from "../db/connection.js";

const parksModel = new mongoose.Schema({
  signname: String,
  class: String,
  borough: String,
  location: String,
  acres: Number,
  retired: Boolean,
  trails: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "trailsModel",
    },
  ],
  events: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "eventModel",
    },
  ],
});

export default mongoose.model("parksModel", parksModel);
