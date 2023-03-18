import express from "express";
import eventsController from "../controllers/eventsCont.js";

const eventsRouter = express.Router();

eventsRouter.get("/", eventsController.index);

eventsRouter.post("/", eventsController.createEvent);

eventsRouter.delete("/:id", eventsController.deleteEvent);

export default eventsRouter;

/**
 * @api {get} /events Get Events
 * @apiName GetEvents
 * @apiGroup Events
 *
 * @apiSuccess {String} _id Objectid
 * @apiSuccess {String} event_name Event name
 * @apiSuccess {String} event_type Catagory of type of event
 * @apiSuccess {String} location location
 * @apiSuccess {String} locationtype catagory of the type of location
 * @apiSuccess {String} borough location's borough
 * @apiSuccess {Date} date_and_time date and time
 *
 *
 * @apiSuccessExample Successful Response:
 * [
 *  {
 *   "_id": "6415d32d5e92e976e81fc7cd",
 *   "event_name": "Youth Arts Festival",
 *   "event_type": "Community Based Event",
 *   "location": "Poe Park",
 *   "locationtype": "Park",
 *   "borough": "Bronx",
 *   "date_and_time": "2018-06-11T15:00:00.000Z",
 *   "__v": 0
 * ]
 */

/**
 * @api {post} /events Add Events
 * @apiName AddEvents
 * @apiGroup Events
 *
 * @apiParam {String} [id] Optional Objectid
 * @apiParam {String} [event_name] Optional Event name
 * @apiParam {String} [event_type] Optional Catagory of type of event
 * @apiParam {String} [location] Optional location
 * @apiParam {String} [locationtype] Optional catagory of the type of location
 * @apiParam {String} [borough] Optional location's borough
 * @apiParam {Date} [date_and_time] date and time //mandatory
 *
 * @apiParamExample Example Body:
 * {
 *  "eventName": "Wizard party",
 *  "eventType": "Community Based Event",
 *  "location": "Poe Park",
 *  "locationtype": "Park",
 *  "borough": "Bronx"
 *  "date_and_time": "2023-06-11T15:00:00.000Z"
 * }
 *
 * @apiSuccess {String} _id Objectid
 * @apiSuccess {String} event_name Event name
 * @apiSuccess {String} event_type Catagory of type of event
 * @apiSuccess {String} location location
 * @apiSuccess {String} Locationtype catagory of the type of location
 * @apiSuccess {String} Borough location's borough
 * @apiSuccess {Date} date_and_time Date and time
 *
 */

/**
 * @api {delete} /events/:id Delete Events by id
 * @apiName DeleteEvent
 * @apiGroup Events
 * 
 * @apiSuccessExample {json} Success
 *  no content
 * 
 * @apiParam {String} id Objectid
 */