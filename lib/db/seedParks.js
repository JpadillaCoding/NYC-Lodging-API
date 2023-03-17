import mongoose from "../db/connection.js";
import boroughsModel from "../models/boroughsModel.js";
import parksModel from "../models/parksModel.js";


async function seedParks() {

    //boroughs in model is spelled out while boroughs in parks database are symbols
    const symbols = new Map([
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
          // Get all boroughs from collection
          const boroughs = await boroughsModel.find({})
          
      
          // Iterate through boroughs and add parks to each borough
          for (let i = 0; i < boroughs.length; i++) {

            const boroughIndex = boroughs[i]
            const boroughSymbol = symbols.get(boroughIndex.borough)
            const parks = await parksModel.find({borough: boroughSymbol})


            const parkIds = parks.map(park => park._id); // Extract park IDs from documents

            await boroughsModel.updateOne(
                {_id: boroughIndex._id}, 
                {$push: {parks: {$each: parkIds}}}
            ); //update mongodb's borough.parks
            boroughIndex.parks.push(...parkIds); // Update local borough object
            await boroughIndex.save();
          }
      
          db.close();
          console.log('Disconnected from database');
        } catch (error) {
          console.log(error);
          db.close();
          console.log('Disconnected from database');
        }
      });
}

seedParks()