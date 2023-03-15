import axios from 'axios';


const urls = [
"https://data.cityofnewyork.us/resource/6v4b-5gp4.json",
"https://data.cityofnewyork.us/resource/enfh-gkve.json",
"https://data.cityofnewyork.us/resource/vjbm-hsyr.json"
];

async function eventData() {

    await axios.all(urls.map((url) => axios.get(url)))
    .then((response) => console.log(response[0].data,response[1].data,response[2].data))
    .catch((error) => console.log(error))

    /* try {
        const response = await axios.get(urls);
        return response.data;
    } catch (error) {
        return console.log("Error: ", error);
    } */
}

export default eventData
