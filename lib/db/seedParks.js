import boroughsModel from "../models/boroughsModel.js";
import parksModel from "../models/parksModel.js";
import mongoose from "../db/connection.js";


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

            parks.forEach((park) => 
            boroughIndex.parks.push(park._id))
            
            // Save boroughs document
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
      //641289e74d71acfa85c7729b
      //641289e74d71acfa85c7729b
}



export default seedParks()