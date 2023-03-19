import express from "express";
import parksController from "../controllers/parksCont.js";

const parksRouter = express.Router();

parksRouter.get("/", parksController.index);

parksRouter.get("/:id", parksController.indexById);

parksRouter.get("/trails/:id", parksController.trails);

parksRouter.get("/events/:id", parksController.events);

export default parksRouter;

/**
 * @api {get} /parks Get Parks
 * @apiName GetParks
 * @apiGroup Parks
 *
 * @apiSuccess {String} _id Objectid
 * @apiSuccess {String} signname sign name found at the park
 * @apiSuccess {String} class type of location(park,field,etc)
 * @apiSuccess {String} borough abbriviation of borough
 * @apiSuccess {String} location address of the park
 * @apiSuccess {Number} acres size of park in acres
 * @apiSuccess {Boolean} retired Park still in service
 * @apiSuccess {Array} trails Objectid's of trails in the park
 * @apiSuccess {Array} events Objectid's of events in the park
 *
 *
 * @apiSuccessExample Successful Response:
 * [
 *  {
 *   "_id": "6415d32d5e92e976e81fc0db",
 *   "signname": "Park",
 *   "class": "PARK",
 *   "borough": "B",
 *   "location": "New Utrecht Ave., 45 St., Ft Hamilton Pkwy.",
 *   "acres": 0.097,
 *   "retired": false,
 *   "trails": [],
 *   "events": [],
 *   "__v": 1
 * ]
 */

/**
 * @api {get} /parks/trails/:id Get Trails By Id
 * @apiName GetTrailsbyPark
 * @apiGroup Parks
 *
 * @apiParam {Number} id trails id
 *
 * @apiSuccess {String} _id Object id
 * @apiSuccess {String} park_name Name of the park
 * @apiSuccess {String} class How developed the trail is
 * @apiSuccess {String} surface Material of the trail
 * @apiSuccess {String} difficulty How hard it is to navigate trails
 *
 * @apiSuccessExample Successful Response:
 *  {
 *    "_id": "6415d32d5e92e976e81fcf9c",
 *    "park_name": "Prospect Park",
 *    "class": "Class IV : Highly Developed",
 *    "surface": "asphalt",
 *    "difficulty": "2: flat terrain, uneven treadway, slight elevation change",
 *    "__v": 0
 *  },
 *
 */

/**
 * @api {get} /parks/events/:id Get Events By Id
 * @apiName GetEventsbyPark
 * @apiGroup Parks
 *
 * @apiParam {Number} id event id
 *
 * @apiSuccess {String} _id Objectid
 * @apiSuccess {String} event_name Event name
 * @apiSuccess {String} event_type Catagory of type of event
 * @apiSuccess {String} location location
 * @apiSuccess {String} locationtype catagory of the type of location
 * @apiSuccess {String} borough location's borough
 * @apiSuccess {Date} date_and_time date and time
 *
 * @apiSuccessExample Successful Response:
 *  {
 *    "_id": "6415d32d5e92e976e81fc7cd",
 *    "event_name": "Youth Arts Festival",
 *    "event_type": "Community Based Event",
 *    "location": "Poe Park",
 *    "locationtype": "Park",
 *    "borough": "Bronx",
 *    "date_and_time": "2018-06-11T15:00:00.000Z",
 *    "__v": 0
 *  },
 *
 */

/**
 * @api {get} /parks/:id Get parks By Id
 * @apiName GetparksbyId
 * @apiGroup Parks
 *
 * @apiParam {Number} id parks id
 *
 * @apiSuccess {String} _id Objectid
 * @apiSuccess {String} signname sign name found at the park
 * @apiSuccess {String} class type of location(park,field,etc)
 * @apiSuccess {String} borough abbriviation of borough
 * @apiSuccess {String} location address of the park
 * @apiSuccess {Number} acres size of park in acres
 * @apiSuccess {Boolean} retired Park still in service
 * @apiSuccess {Array} trails Objectid's of trails in the park
 * @apiSuccess {Array} events Objectid's of events in the park
 *
 * @apiSuccessExample Successful Response:
 *  {
 *   "_id": "6415d32d5e92e976e81fc0db",
 *   "signname": "Park",
 *   "class": "PARK",
 *   "borough": "B",
 *   "location": "New Utrecht Ave., 45 St., Ft Hamilton Pkwy.",
 *   "acres": 0.097,
 *   "retired": false,
 *   "trails": [],
 *   "events": [],
 *   "__v": 1
 */
