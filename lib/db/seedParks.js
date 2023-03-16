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

            const boroughIndex = boroughs[i].borough
            const boroughSymbol = symbols.get(boroughIndex)


            const parks = await parksModel.find({borough: boroughSymbol})

            boroughsModel.parks = parks._id
            console.log(parks)
            // Save boroughs document
            await boroughs[i].save();
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



export default seedParks()