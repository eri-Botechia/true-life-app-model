import express from 'express';
import { Router } from 'express';
import * as  mainController from '../controllers/mainController';
const router = express.Router();


router.get('/', mainController.getSlash);

export default router;