import axios from 'axios';

async function getParkData() {
    try {
        const response = await axios.get('https://data.cityofnewyork.us/resource/enfh-gkve.json')
        return(response.data)
    } 
    catch(error) {
        console.log(error)
    }
}
async function getEventsData() {
    try {
        const response = await axios.get('https://data.cityofnewyork.us/resource/6v4b-5gp4.json')
        return(response.data)
    } 
    catch(error) {
        console.log(error)
    }
}
async function getTrailsData() {
    try {
        const response = await axios.get('https://data.cityofnewyork.us/resource/vjbm-hsyr.json')
        return(response.data)
    }
    catch(error) {
        console.log(error)
    }
}

const parksData = getParkData();
const eventsData = getEventsData();
const trailsData = getTrailsData();

module.exports = { parksData, eventsData, trailsData }