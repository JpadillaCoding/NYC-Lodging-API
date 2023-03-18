import express from "express";
import boroughController from "../controllers/boroughsCont.js";

const boroughRouter = express.Router();

boroughRouter.get("/", boroughController.index);

boroughRouter.get("/:id", boroughController.borough);

export default boroughRouter;

/**
 * @api {get} /boroughs Get Boroughs
 * @apiName GetBoroughsById
 * @apiGroup Boroughs
 *
 * @apiSuccess {String} borough Objectid
 * @apiSuccess {String} borough Borough name
 *
 * @apiSuccessExample Successful Response:
 * [
 *  {
 *   "id": "6415d32d5e92e976e81fbff4",
 *   "borough": "Staten Island"
 *  },
 * ]
 */

/**
 * @api {get} /boroughs/:id Get Boroughs By Id
 * @apiName GetBoroughs
 * @apiGroup Boroughs
 *
 * @apiParam {Number} id Borough id
 *
 * @apiSuccess {String} id Objectid
 * @apiSuccess {String} borough Borough name
 * @apiSuccess {Array} parks Objectid list of parks in that borough
 *
 * @apiSuccessExample Successful Response:
 * [
 *  {
 *   "_id": "6415d32d5e92e976e81fbff4",
 *   "borough": "Staten Island",
 *   "parks": [
 *    "6415d32d5e92e976e81fc002",
 *    "6415d32d5e92e976e81fc00d",
 *    "6415d32d5e92e976e81fc019",
 *    "6415d32d5e92e976e81fc03b"
 *    ]
 *  }
 * ]
 */
