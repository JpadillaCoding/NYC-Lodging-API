import { eventsData, parksData, trailsData } from "../fetchData.js";
import eventModel from "../models/eventsModel.js";
import parksModel from "../models/parksModel.js";
import trailsModel from "../models/trailsModel.js"

eventsData().then(data => {

    eventModel.deleteMany(data)
    eventModel.create(data);
    process.exit()
    
})
.catch(error => {
    console.log("Error: ",error)
})


parksData().then(data => {

    parksModel.deleteMany(data)
    parksModel.create(data);
    process.exit()
})
.catch(error => {
    console.log("Error: ",error)
})


trailsData().then(data => {

    trailsModel.deleteMany(data)
    trailsModel.create(data);
    process.exit()
})
.catch(error => {
    console.log("Error: ",error)
})





