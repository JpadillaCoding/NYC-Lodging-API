import mongoose from "../db/connection.js";

const trailsModel = new mongoose.Schema({
    trail_name: String,
    park_name: String,
    class: String,
    surface: String,
    difficulty: String
})

export default mongoose.model("trailsModel", trailsModel)