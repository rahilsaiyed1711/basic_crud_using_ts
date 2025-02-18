import express from 'express';
import {
  createTask,
  deleteTask,
  getTask,
  readById,
  updateTask,
} from '../controllers/task.controller';
const router = express.Router();

router.post('/createTask', createTask);
router.get('/allTask', getTask);
router.get('/:id', readById);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
export default router;
