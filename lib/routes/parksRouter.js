import express from "express";
import parksController from "../controllers/parksCont.js";

const parksRouter = express.Router();

parksRouter.get("/", parksController.index);

parksRouter.get("/trails/:id", parksController.trails);

parksRouter.get("/events/:id", parksController.events);

export default parksRouter;

/**
 * @api {get} /parks Get Parks
 * @apiName GetParks
 * @apiGroup Parks
 *
 * @apiSuccess {String} id Objectid
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
