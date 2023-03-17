import mongoose from "./connection.js"
import trailsModel from "../models/trailsModel.js";
import parksModel from "../models/parksModel.js";
import eventModel from "../models/eventsModel.js";

async function seedAmenities() {


    const db = mongoose.connection;

    db.once('open', async () => {
        console.log('Connected to database');
      
        try {
      
            const parks = await parksModel.find({})
            
            for(let i = 0; i < parks.length; i++) {
                
                const parkIndex = parks[i]
                const signName = parkIndex.signname

                const events = await eventModel.find({location: signName})
                const eventIds = events.map(event => event._id)

                await parksModel.updateOne(
                    {_id: parkIndex._id}, 
                    {$push: {events: {$each: eventIds}}}
                ); //update mongodb borough parks
                    parkIndex.events.push(...eventIds); // Update local borough object
                    await parkIndex.save();
            }


          db.close();
          console.log('Disconnected from database');
        } catch (error) {
          console.log(error);
          db.close();
          console.log('Disconnected from database');
        }
      });
};
seedAmenities();