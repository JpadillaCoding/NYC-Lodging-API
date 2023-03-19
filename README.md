# NYC Parks & Amenities

## Intro

NYC is a big city with a lot of parks. [NYC Open Data](https://opendata.cityofnewyork.us/) has a lot of information about their parks which inspired me to make an API containing every park structured by borough. Each park was organized with a list of events and trails for ease of access to what each park has to offer.

## Approach

Looked for APIs through NYC Open Data with data that can be connected. This was done by taking advantage of the amenities objects listing the name of the park they are located in. All of the HTTP responses were set up for ease of use for a user that would like to know what a park has available.

## Installation

This installation requires a MongoDB database

1. Clone the repo
   > `Git clone [clone link] `
2. Install dependencies
   > `npm install express mongoose`
3. Seed the data
   - Navigate into the repo file
     > `node ./lib/db/seed.js ` 

     > `node ./lib/db/seedParks.js` 
     
     > `node ./lib/db/seedAmenities.js`
4. Launch the server
   > `node ./lib/index.js`
5. Open in browser
   > [Local Host](http://localhost:4000/)
6. For documentation open the doc link
   > `open ./docs/index.html`

## Api Demo

Check out a demo of the API data and documentation!

![Api Demo](./misc/Api%20demo.gif)


## Hurdles 

This [Sheets](https://docs.google.com/spreadsheets/d/1yoJJ-LUfNMUR-cwOMaIuyi-udg2F0RgKnjBWRLzwm-U/edit#gid=0) link shows all the major hurdles I came across. There are three sections- The issue, error code, and resolution! This project was a huge learning experience and being able to reference these major problems on future issues is extremely valuable. 

## Technologies Used
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

![Node.JS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

[Mongoose](https://mongoosejs.com/docs/)
