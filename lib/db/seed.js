
import { eventsData, parksData, trailsData } from "../fetchData.js";
import eventmodel from "../models/eventsModel.js";
import parksModel from "../models/parksModel.js";
import trailsModel from "../models/trailsModel.js";
import boroughsModel from "../models/boroughsModel.js";

async function seed() {
    /*have to use await to let the data seed or else process.exit()
    cuts the seed short before promise is complete
    */

    const events= await eventsData()
    const parks = await parksData()
    const trails = await trailsData()

    await boroughsModel.create([
        {borough: "Queens"}, {borough: "Manhattan"}, {borough: "Bronx"},
        {borough: "Staten Island"}, {borough:"Brooklyn"}
    ])
    await parksModel.create(parks)
    await eventmodel.create(events)
    await trailsModel.create(trails)

    process.exit()
}

seed()





