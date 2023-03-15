import axios from 'axios';

async function getParkData() {
    try {
        const response = await axios.get('https://data.cityofnewyork.us/resource/enfh-gkve.json')
        console.log(response.data)
    } 
    catch(error) {
        console.log(error)
    }
}
async function getEventsData() {
    try {
        const response = await axios.get('https://data.cityofnewyork.us/resource/6v4b-5gp4.json')
        console.log(response.data)
    } 
    catch(error) {
        console.log(error)
    }
}
async function getTrailsData() {
    try {
        const response = await axios.get('https://data.cityofnewyork.us/resource/vjbm-hsyr.json')
        console.log(response.data)
    }
    catch(error) {
        console.log(error)
    }
}

/* getParkData(); */
getEventsData();
/* getTrailsData(); */