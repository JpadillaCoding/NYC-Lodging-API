import boroughsModel from "../models/boroughsModel.js";
import parksModel from "../models/parksModel.js";
import mongoose from "../db/connection.js";


async function seedParks() {

    const boroughs = new Map([
        ["Queens", "Q"],
        ["Manhattan","M"],
        ["Bronx", "X"],
        ["Staten Island", "R"],
        ["Brooklyn", "B"],
    ])
    
    const db = mongoose.connection;

    db.once('open', async () => {
        console.log('Connected to database');
      
        try {
          // Get all monarchs from Monarch collection
          const boroughs = await boroughsModel.find({})
          console.log(boroughs)
      /* 
          // Iterate through monarchs and add kingdom to each monarch
          for (let i = 0; i < monarchs.length; i++) {
            const monarch = monarchs[i];
      
            // Find kingdom by title
            const kingdom = await Kingdom.findOne({ title: monarchRawData[i].kingdom });
      
            // Set monarch's kingdom property to the kingdom document
            monarch.kingdom = kingdom._id;
      
            // Save monarch document
            await monarch.save();
          } */
      
          db.close();
          console.log('Disconnected from database');
        } catch (error) {
          console.log(error);
          db.close();
          console.log('Disconnected from database');
        }
      });
    
}



export default seedParks()