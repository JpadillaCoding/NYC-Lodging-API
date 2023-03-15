import eventData from "../fetchData.js";
import eventModel from "../models/eventsModel.js";

eventData().then(data => {
    eventModel.deleteMany(data)
    eventModel.create(data);
    process.exit()
    
}).catch(error => {
    console.log("Error: ",error)
})





