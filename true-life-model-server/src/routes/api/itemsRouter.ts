import express from 'express';
import { Router } from 'express';
import * as  itemsController from '../../controllers/api/itemsController';
const router = express.Router();


router.get('/', itemsController.getSlash);
router.get('/list', itemsController.getAll);
router.get('/:id', itemsController.getItem);
router.post('/', itemsController.postItem);
router.put('/:id', itemsController.putItem);
router.delete('/:id', itemsController.deleteItem);


export default router;