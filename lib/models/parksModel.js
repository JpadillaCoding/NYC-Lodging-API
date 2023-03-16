import mongoose from "../db/connection.js";

const parksModel = new mongoose.Schema({
    signname: String,
    class: String,
    borough: String,
    location: String,
    acres: Number,
    retired: Boolean,
})

export default mongoose.model("parksModel", parksModel)