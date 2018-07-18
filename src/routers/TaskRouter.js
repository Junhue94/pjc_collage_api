import express from 'express';
import { createTask, getTask, findTask } from '../controllers/TaskController';

const router = express.Router();

router.route('/')
    .get(findTask)
    .post(createTask);

router.route('/:id')
    .get(getTask);

export default router;
