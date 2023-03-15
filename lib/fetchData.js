import axios from 'axios';


async function eventData() {
    try {
        const response = await axios.get("https://data.cityofnewyork.us/resource/6v4b-5gp4.json");
        return response.data;
    } catch (error) {
        return console.log("Error: ", error);
    }
}

export default eventData
