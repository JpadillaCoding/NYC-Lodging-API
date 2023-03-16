import { eventsData, parksData, trailsData } from "../fetchData.js";
import eventmodel from "../models/eventsModel.js";
import parksModel from "../models/parksModel.js";
import trailsModel from "../models/trailsModel.js";
import boroughsModel from "../models/boroughsModel.js";

async function seed() {
    /*have to use await to let the data seed or else process.exit()
    cuts the seed short before promise is complete
    */
   /* const boroughs = new Map([
    ["Queens", "Q"],
    ["Manhattan","M"],
    ["Bronx", "X"],
    ["Staten Island", "R"],
    ["Brooklyn", "B"],
   ]) */

    const events= await eventsData()
    const parks = await parksData()
    const trails = await trailsData()

    await boroughsModel.create([
        {borough: "Queens"}, {borough: "Manhattan"}, {borough: "Bronx"},
        {borough: "Staten Island"}, {borough:"Brooklyn"}
    ])


    await eventmodel.create(events)
    await parksModel.create(parks)
    await trailsModel.create(trails)

    process.exit()
}

seed()





