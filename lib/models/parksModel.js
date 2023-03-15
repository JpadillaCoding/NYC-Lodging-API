import mongoose from "../db/connection.js";

const parksModel = new mongoose.Schema({
    signname: String,
    class: Number,
    borough: String,
    location: String,
    acres: Number,
    retired: Boolean,
})

export default mongoose.model("parksModel", parksModel)