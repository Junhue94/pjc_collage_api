import express from 'express';
import { createTask, findTask } from '../controllers/TaskController';

const router = express.Router();

router.route('/')
    .get(findTask)
    .post(createTask);

export default router;
