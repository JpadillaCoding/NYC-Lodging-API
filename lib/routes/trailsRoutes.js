import express from "express";
import trailsController from "../controllers/trailsCont.js";

const trailsRouter = express.Router();

trailsRouter.get("/", trailsController.index);

trailsRouter.put("/:id", trailsController.updatePark);

export default trailsRouter;

/**
 * @api {get} /trails Get Trails
 * @apiName GetTrails
 * @apiGroup Trails
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
 * [
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
 * ]
 */

/**
 * @api {get} /trails/:id Get Trails By id
 * @apiName GetTrails
 * @apiGroup Trails
 *
 * @apiParam {Number} id trail id
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
 * [
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
 * ]
 */