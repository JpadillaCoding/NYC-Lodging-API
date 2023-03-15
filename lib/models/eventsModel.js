import mongoose from "../db/connection.js";

const eventsModel = new mongoose.Schema({
    event_name: String,
    event_type: String,
    location: String,
    locationtype: String,
    borough: String,
    date_and_time: Date
})

export default mongoose.model("eventsModel", eventsModel)