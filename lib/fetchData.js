import axios from "axios";

export async function eventsData() {
  try {
    const response = await axios.get(
      "https://data.cityofnewyork.us/resource/6v4b-5gp4.json"
    );
    return response.data;
  } catch (error) {
    return console.log("Error: ", error);
  }
}

export async function parksData() {
  try {
    const response = await axios.get(
      "https://data.cityofnewyork.us/resource/enfh-gkve.json"
    );
    return response.data;
  } catch (error) {
    return console.log("Error: ", error);
  }
}

export async function trailsData() {
  try {
    const response = await axios.get(
      "https://data.cityofnewyork.us/resource/vjbm-hsyr.json"
    );
    return response.data;
  } catch (error) {
    return console.log("Error: ", error);
  }
}
