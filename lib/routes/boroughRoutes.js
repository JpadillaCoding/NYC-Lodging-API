import express from 'express';
import boroughController from '../controllers/boroughsCont';

const boroughRouter = express.Router();

boroughRouter.get('/', boroughController.index)

export default boroughRouter;