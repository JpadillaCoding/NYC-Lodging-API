import mongoose from "./connection.js"
import trailsModel from "../models/trailsModel";
import parksModel from "../models/parksModel";
import eventModel from "../models/eventsModel.js";

async function seedAmenities() {

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
      
          db.close();
          console.log('Disconnected from database');
        } catch (error) {
          console.log(error);
          db.close();
          console.log('Disconnected from database');
        }
      });
}