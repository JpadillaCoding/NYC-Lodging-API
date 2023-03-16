import mongoose from "../db/connection.js";


const boroughsModel = new mongoose.Schema({
    borough: String,
    parks: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'parksModel'
    }]
})

export default mongoose.model('boroughsModel', boroughsModel)