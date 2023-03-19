# NYC Parks & Amenities

## Intro

NYC is a big city with a lot of parks. [NYC Open Data](https://opendata.cityofnewyork.us/) has a lot of information about their parks which inspired me to make an API containing every park structured by borough. Each park was organized with a list of events and trails for ease of access to what each park has to offer. 

## Approach 

Looked for APIs through NYC Open Data with data that can be connected. This was done by taking advantage of the amenities objects listing the name of the park they are located in. All of the HTTP responses were set up for ease of use for a user that would like to know what a park has available. 

## Installation 

This installation requires a MongoDB database
1. Clone the repo
    > ```Git clone [clone link] ```
2. Install dependencies
    > ```npm install express mongoose```
3. Seed the data 
    > Navigate into the repo file 
    > ```node ./lib/seed.js ```
    > ```node ./lib/db/seedParks.js```
    > ```node ./lib/db/seedAmenities.js```
4. Launch the server
    >```node ./lib/index.js```
5. Open in browser
    > 



https://docs.google.com/spreadsheets/d/1yoJJ-LUfNMUR-cwOMaIuyi-udg2F0RgKnjBWRLzwm-U/edit#gid=0
