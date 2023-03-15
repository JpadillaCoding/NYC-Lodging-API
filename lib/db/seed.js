import eventsModel from "../models/eventsModel.js";
import parksModel from  "../models/parksModel.js";
import trailsModel from "../models/trailsModel.js";
import parksData from "../fetchData.js"
import eventsData from "../fetchData.js"
import trailsData from "../fetchData.js"


async function seed() {

   await eventsModel.deleteMany({})
   await parksModel.deleteMany({})
   await trailsModel.deleteMany({})

   await eventsModel.create(eventsData)
   await parksModel.create(parksData)
   await trailsModel.create(trailsData)

   process.exit()
}

seed();




