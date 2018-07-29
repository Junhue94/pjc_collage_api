import express from 'express';
import Config from 'config';
import { uploadImage } from '../utils/upload';
import {
    createTask,
    getTask,
    findTask,
    updateTask,
} from '../controllers/TaskController';

const { folderCollage } = Config.get('s3');

const router = express.Router();

router.route('/')
    .get(findTask)
    .post(createTask);

router.route('/:id')
    .get(getTask)
    .put(uploadImage(folderCollage), updateTask);

export default router;
